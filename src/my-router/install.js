import View from '@/components/View'
import Link from '@/components/Link'

// install方法中会为所有组件添加$router以及$route属性，并且会全局注册router-view以及router-link组件
export default function(Vue) {
  Vue.mixin({
    beforeCreate() {
      const { router } = this.$options
      if (router) {
        // 用_rootRouter来存储根实例
        this._rootRouter = this
        // 为根实例添加_router属性
        this._router = router
        // 在根实例上定义响应式属性
        Vue.util.defineReactive(this, '_route', this._router.history.current)
        // 初始化路由
        router.init(this)
      } else {
        this._rootRouter = this.$parent && this.$parent._rootRouter
      }
    }
  })

  // 使用Object.defineProperty定义属性，可以避免被调用者修改或删除
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._rootRouter._router
    }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._rootRouter._route
    }
  })

  Vue.component('router-view', View)
  Vue.component('router-link', Link)
}
