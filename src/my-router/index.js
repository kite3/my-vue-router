import install from './install'
import HashHistory from './history/hash'
import createMatcher from './create-matcher'

class VueRouter {
  constructor(options) {
    this.matcher = createMatcher(options.routes)
    this.history = new HashHistory(this)
    this.app = null
  }

  init(app) {
    this.app = app
    // 第一次渲染需要手动执行一次onHashChange方法
    this.history.onHashChange()
    // 执行install方法时会执行init，这时监听hashchange事件
    this.history.listenEvent()
  }

  match(path) {
    return this.matcher.match(path)
  }

  push(path) {
    location.hash = path
  }
}

VueRouter.install = install

export default VueRouter
