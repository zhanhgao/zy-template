const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  permissionObj: state => state.permission.permissionObj,
  opened: state => {
    if (state.app.opened === 'false') {
      return false
    } else if (state.app.opened === 'true') {
      return true
    }
  },
  tempBread: state => state.global.tempBread,
  serviceTypeList: state => state.app.serviceTypeList,
  osList: state => state.app.osList
}
export default getters
