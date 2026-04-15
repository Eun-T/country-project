import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountry } from '@/api/countryapi'

export const useQuizStore = defineStore('quiz', () => {
  const quiz = ref(0)

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const axiosQuiz = async () => {
    const response = await getCountry()
    return response
  }


  return { quiz, axiosQuiz }
})
