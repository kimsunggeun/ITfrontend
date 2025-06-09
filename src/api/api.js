import axios from 'axios'
import { useLoadingStore } from '@/stores/loading'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
})

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const loading = useLoadingStore()
    loading.start()
    return config
  },
  (error) => {
    const loading = useLoadingStore()
    loading.finish()
    return Promise.reject(error)
  }
)

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    const loading = useLoadingStore()
    loading.finish()
    return response
  },
  (error) => {
    const loading = useLoadingStore()
    loading.finish()
    return Promise.reject(error)
  }
)

export default api