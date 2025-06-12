<route lang="yaml">
  layout: DefaultLayout
  meta:
    title: '로그인 페이지'
  </route>
  
<template>


  <div class="login">
    <!-- 이미지 박스 -->
    <div class="login__imgBox">
       <img src="@/assets/img/login.png" alt="login_img">
    </div>
    <!-- 로그인 폼 -->
    <div class="login__formBox">
        <div class="login__formBox__title">
          <h1>프로젝트명</h1>
        </div>
        <!-- 폼  -->
        <div class="login__formBox__input">
          <v-text-field
          hide-details="auto"
          label="User ID"
          min-width="330"
          variant="outlined"
          class="mb-4 mt-4"
           color="primary"
           v-model="id"
        />
        <v-text-field
          hide-details="auto"
          label="Password"
          class="mb-8"
          variant="outlined"
          color="primary"
          :type="isView ? 'password' : 'text'"  
          :append-inner-icon="isView ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
          @click:append-inner="toggleView"
          v-model="password"
          @keyup.enter="login"
          />
        </div>
      <!-- 버튼 -->
        <div class="login__formBox__button">
          <button class="login__formBox__button__btn" @click="login">로그인</button>
          <p style="color:#cccccc	;">계정이 아직없으신가요? <span style="color: #222; font-weight: border; cursor: pointer;">회원가입</span></p>
        </div>
        <!-- 로고 -->
        <div class="login__formBox__logo">
          <div style="position: absolute;">
            <img src="@/assets/img/LS_THiRAUTECH_SIGNATURE.png" alt="logo">
          </div>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/user'
// import { useUserStore } from '@/stores/user'
import api  from '@/api/api.js'


const router = useRouter()


const id = ref('')
const password = ref('')

const isView = ref(true)

const toggleView = () => {
  isView.value = !isView.value
}

const login = async () => {
  const authStore = useAuthStore()

  if (id.value === '' || password.value === '') {
    alert('아이디와 비밀번호를 입력해주세요.')
    return
  }

  try {
    await api.post('/auth/login', {
      id: id.value,
      password: password.value,
    })

    await authStore.checkAuth() 

    if (authStore.isAuthenticated) {
      router.push('/')
    } else {
      alert('로그인 실패: 인증 실패')
    }

  } catch (err) {
    console.error('로그인 실패', err)
    alert('아이디 또는 비밀번호가 잘못되었습니다.')
  }
}

</script>

