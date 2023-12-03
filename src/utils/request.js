// Encapsulation handling by axios
import axios from 'axios'
// 1. Root domain configuration
// 2. Timeout period
// 3. Request interceptor/response interceptor

const request = axios.create({
  baseURL: 'http://127.0.0.1:8088/api/user',
  timeout: 5000,
})

// Add a request interceptor
// Before the request is sent, do the interception, insert some custom configuration [parameter handling]
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Add a response interceptor
// Intercept the response before it is returned to the client, focusing on the returned data
request.interceptors.response.use(
  (response) => {
    // This function is triggered by status codes in the 2xx range.
    // What to do with the response data
    return response.data
  },
  (error) => {
    // This function is triggered by any status code outside the 2xx range.
    // What to do about response errors
    return Promise.reject(error)
  }
)

export { request }
