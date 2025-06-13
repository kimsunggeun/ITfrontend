import axios from 'axios'
import { useLoadingStore } from '@/stores/loading'
import { useMessagesStore } from '@/stores/messages'


const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true 
})

// 요청 인터셉터
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

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    const loading = useLoadingStore()
    const messages = useMessagesStore()
    loading.finish()

    const { successMessage } = response.config
    if (successMessage) {
      messages.add(successMessage,'success')
    }

    return response
  },
  (error) => {
    const loading = useLoadingStore()
    const messages = useMessagesStore()
    loading.finish()

    const { errorMessage } = error.config || {}

    if (error.response && error.response.status === 401) {
      console.warn('🔒 인증 실패 - 로그인 필요')
      router.push('/login')
    } else if (errorMessage) {
      messages.add(errorMessage,'error')
    }

    return Promise.reject(error)
  }
)

export default api