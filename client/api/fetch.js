/**
 * Created by ebi on 2017/5/11.
 */
import axios from 'axios'
import store from '../store'
import router from '../router'
import { Toast } from 'mint-ui'

axios.defaults.timeout = 15000
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
  config.headers.Authorization = store.state.token
  config.headers.UUID = store.state.UUID
  config.headers.Platform = 'M/' + require('../../package.json').version
  config.headers.Device = `${window.screen.width}*${window.screen.height}`
  config.headers.City = store.state.city ? store.state.city.countyId : 0
  return config
}, err => {
  return Promise.reject(err)
})

function fetch (url = '', params = {}, method = 'get', type = 'formData') {
  let query = []
  for (let k in params) {
    query.push(k + '=' + params[k])
  }
  let qs = query.join('&')
  if (method.toLowerCase() === 'get' && query.length > 0) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + qs
  }
  if (type === 'payload' && method === 'post') {
    qs = params
  }
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: qs
    }).then(function (response) {
      // console.log(response)
      if (response.status >= 200 && response.status < 400) {
        if (response.data.code === 1000) { // 未登录
          router.push('/login')
          return
        }
        resolve(response.data)
      } else {
        Toast(response.status + '-' + response.statusText)
      }
    }).catch(function (err) {
      if ((err + '').indexOf('timeout') > -1) {
        Toast('请求超时，请重试一次或刷新页面')
      } else {
        Toast(err + ' : ' + url)
      }
      reject(err)
    })
  })
}

export default fetch
