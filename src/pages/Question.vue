<template>
  <div class="question-container">
    <QuizCard width="1000px" height="550px">
      <div class="question-card">
        <div class="question-progress">
          <QuizProgress
            v-for="(progress, index) in states.progresses"
            :key="index"
            :progress="progress"
          />
        </div>
        <h3 class="question-explain" >이 국기 {{ states.list[0]?.name.common }} 는 어느 나라의 것일까요?</h3>
        <div class="question-btn">
          <PrimaryBtn width="250px" height="60px" @click="goToNext"> 스웨덴 </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext"> 스웨덴 </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext"> 스웨덴 </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext"> 스웨덴 </PrimaryBtn>
        </div>
      </div>
    </QuizCard>
  </div>
</template>

<script setup>
import PrimaryBtn from '@/components/PrimaryBtn.vue';
import QuizCard from '@/components/QuizCard.vue';
import QuizProgress from '@/components/QuizProgress.vue';
import { useQuizStore } from '@/stores/counter';
import { computed, onMounted, reactive, ref } from 'vue';

const store = useQuizStore();
const states = reactive({
  list: [],
  progresses: [
    { id: 1, isCorrect: true },
    { id: 2, isCorrect: false },
    { id: 3, isCorrect: false },
    { id: 4, isCorrect: false },
    { id: 5, isCorrect: false },
    { id: 6, isCorrect: false },
    { id: 7, isCorrect: false },
    { id: 8, isCorrect: false },
    { id: 9, isCorrect: false },
    { id: 10, isCorrect: false },
  ],
  problemList: [],
});
const problemNUm = ref(0);

const computeNum = computed(() => {
  
})

const goToNext = () => {
  problemNUm.value++
}

onMounted(async () => {
  const response = await store.axiosQuiz();
  const num = [];

  //랜덤한 수 10개 뽑기 (중복 제거)
  for (let index = 0; index < 10; index++) {
    let num1 = Math.floor(Math.random() * 250);
    while (num.includes(num1)) {
      num1 = Math.floor(Math.random() * 250);
    }
    num.push(num1);
  }

  for (let i = 0; i < num.length; i++) {
    states.list.push(response[num[i]])
  }
  console.log(states.list);
});

</script>

<style scoped lang="scss">
.question-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question-card {
  text-align: center;
}
.question-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 45px;
}
.question-explain {
  margin-bottom: 45px;
}
.question-btn {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
