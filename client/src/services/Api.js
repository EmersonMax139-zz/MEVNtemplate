import axios from 'axios'

// THIS IS THE MAIN SERVICE -- All other services will import this,
//   and use the function that it exports

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
