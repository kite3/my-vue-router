import createRouteMap from './create-route-map'

export const createRoute = (route, path) => {
  const matched = []
  // 递归route的所有父路由，生成matched数组，并和path一起返回，作为当前的路由信息
  while (route) {
    matched.unshift(route)
    route = route.parent
  }
  return {
    path,
    matched
  }
}

export default function createMatcher(routes) {
  const pathMap = createRouteMap(routes)

  const match = path => {
    const route = pathMap[path]
    return createRoute(route, path)
  }

  return {
    match
  }
}
