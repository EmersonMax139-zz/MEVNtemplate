import axios from 'axios'

// THIS IS THE MAIN SERVICE -- All other services will import this
//
export default() => {
  return axios.create({
    // This will change for deployment (example: 'api/')
    baseURL: `http://localhost:8081/api/`
  })
}
