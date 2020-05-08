import API from './index'


// 登录
export function login(data) {
  const url = '/login'
  return API.post(url, data)
}
export function getMunu(name) {
  // const url = '/menu'
  const url = `/menu/${name}`;
  return API.get(url)
}
