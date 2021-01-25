import { createRoute } from '../create-matcher'

const ensureSlash = () => {
  if (!location.hash) {
    location.hash = '/'
  }
}

const getHash = () => {
  // location.hash有兼容性问题
  // return location.hash.replace('#', '')
  const href = window.location.href
  const index = href.indexOf('#')
  return index === -1 ? '' : href.slice(index + 1)
}

class HashHistory {
  constructor(router) {
    this.router = router
    this.current = createRoute(null, '/')
    // 绑定this指向
    this.onHashChange = this.onHashChange.bind(this)
    // 默认hash为'/'
    ensureSlash()
  }

  listenEvent() {
    window.addEventListener('hashchange', this.onHashChange)
  }

  onHashChange() {
    const path = getHash()
    const route = this.router.match(path)
    // 把当前路由赋值给根实例，从而触发响应式更新。app会在router.init方法中初始化
    this.router.app._route = route
  }
}

export default HashHistory
