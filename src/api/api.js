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


// 企业搜索
export function searchCompany(data) {
  const url = '/api/xy/customerInfo/queryKey'
  return API.post(url, data)
}
// 获取证书list
export function certificateList(data) {
  const url = '/api/xy/customerCertificate/queryCertListByCustId'
  return API.post(url, data)
}
// 企业证书详情
export function searchDetail(data) {
  const url = '/api/xy/customerCertificate/queryCertById'
  return API.post(url, data)
}