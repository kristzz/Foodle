import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app'

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBqDlHFujhIbye0Y3Lijnu8iZxHighewQE",
    authDomain: "foodlewebproject.firebaseapp.com",
    projectId: "foodlewebproject",
    storageBucket: "foodlewebproject.appspot.com",
    messagingSenderId: "706839818453",
    appId: "1:706839818453:web:e9fa24a6f24ef75b51f25c"
})

export const getUserState = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(getAuth(), resolve, reject)
    // Clean up the subscription after resolving or rejecting the promise
    return () => unsubscribe()
  })

export const useAuthState = () => {
  const user = ref(null)
  const error = ref(null)

  const auth = getAuth()
  let unsubscribe

  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      (u) => (user.value = u),
      (e) => (error.value = e)
    )
  })

  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value !== null)
  
  return { user, error, isAuthenticated }
}