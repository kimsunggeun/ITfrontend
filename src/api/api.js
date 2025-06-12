import axios from 'axios'
import { useLoadingStore } from '@/stores/loading'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true 
})


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


api.interceptors.response.use(
  (response) => {
    const loading = useLoadingStore()
    loading.finish()
    return response
  },
  (error) => {
    const loading = useLoadingStore()
    loading.finish()

    if (error.response && error.response.status === 401) {
      console.warn('🔒 인증 실패 - 로그인 필요')
      router.push('/login')
    }

    return Promise.reject(error)
  }
)

export default api