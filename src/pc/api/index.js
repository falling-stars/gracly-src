import axios from 'axios'

function fetch(url = '', params = {}, method = 'get', type = 'formData') {
  return axios({
    method,
    url,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
}

export default fetch