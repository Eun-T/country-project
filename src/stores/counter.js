import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCountry } from '@/api/countryapi'

export const useQuizStore = defineStore('quiz', () => {
  const quiz = ref(0)

  const axiosQuiz = async () => {
    const response = await getCountry()
    return response.data
  }

  const resetQuizNUm = () => {
    quiz.value = 0
  }


  return { quiz, axiosQuiz, resetQuizNUm }
})
