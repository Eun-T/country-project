import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountry } from '@/api/countryapi'

export const useQuizStore = defineStore('quiz', () => {
  const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  const axiosQuiz = async () => {
    const response = await getCountry()
    console.log(response.data);
  }

  axiosQuiz()

  return { count, axiosQuiz }
})
