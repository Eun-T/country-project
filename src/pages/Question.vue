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
        <h3 class="question-explain">
          이 국기
          <img
            :src="computeNum?.flags.png"
            :alt="computeNum?.flags.alt"
            width="15px"
            height="15px"
          />
          는 어느 나라의 것일까요?
        </h3>
        <div class="question-btn">
          <PrimaryBtn
    v-for="(item, index) in shuffledChoices"
    :key="index"
    width="250px"
    height="60px"
    @click="checkAnswer(item)"
  >
    {{ item?.name.common }}
  </PrimaryBtn>
        </div>
      </div>
    </QuizCard>
  </div>
</template>

<script setup>
import PrimaryBtn from '@/components/PrimaryBtn.vue';
import QuizCard from '@/components/QuizCard.vue';
import QuizProgress from '@/components/QuizProgress.vue';
import router from '@/router';
import { useQuizStore } from '@/stores/counter';
import { computed, onMounted, reactive, ref, watch } from 'vue';

const store = useQuizStore();
const states = reactive({
  list: [], //정답 10개 리스트
  progresses: [
    { id: 1, isCorrect: false },
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
  wrongList: [], //오답 240개 리스트
});
const problemNUm = ref(0);
const wrongThreeChoices = ref([]);
const quizProgressId = ref(0)
const goBackNum = ref(0)

// 정답이 아닌 버튼을 위한 3개 뽑기
const getThreeWrong = () => {
  let result = [];

  while (result.length < 3) {
    let num = Math.floor(Math.random() * 240);

    if (!result.includes(num)) {
      result.push(num);
    }
  }

  wrongThreeChoices.value = result;
};

watch(goBackNum, (newVal) => {
  if(newVal > 3){
    router.push('/result')
  }
})

watch(problemNUm,(newVal) => {
  if(newVal >= 10){
    router.push('/result')
  }
})

//문제 깃발,이름,사진 등등 => 결국 이놈이 정답
const computeNum = computed(() => {
  return states.list[problemNUm.value];
});

const checkAnswer = (index) => {
  //index = {flags: {…}, name: {…}, capital: Array(1)}
  if(index.name.common == computeNum.value.name.common){
    states.progresses[quizProgressId.value].isCorrect = true
    store.quiz++
    console.log("store.quiz : ",store.quiz);
  }else{
    states.progresses[quizProgressId.value].isCorrect = false
    goBackNum.value++
  }
  quizProgressId.value++
  problemNUm.value++;
  getThreeWrong()
};

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const shuffledChoices = computed(() => {
  const arr = [
    computeNum.value,
    states.wrongList[wrongThreeChoices.value[0]],
    states.wrongList[wrongThreeChoices.value[1]],
    states.wrongList[wrongThreeChoices.value[2]],
  ];

  return shuffleArray(arr);
});

onMounted(async () => {
  store.resetQuizNUm()
  const response = await store.axiosQuiz();
  const arr = Array.from({ length: 250 }, (_, i) => i);
  const correctNum = [];

  //랜덤한 수 10개 뽑기 (중복 제거)
  //정답만 뺸 240개의 리스트 = arr
  //correctNum = [10,40,2,123,34,12,...]
  for (let index = 0; index < 10; index++) {
    let num1 = Math.floor(Math.random() * 250);
    while (correctNum.includes(num1)) {
      num1 = Math.floor(Math.random() * 250);
    }
    const idx = arr.findIndex((u) => u == num1);
    arr.splice(idx, 1);
    correctNum.push(num1);
  }

  //랜덤한 수 10개를 => 국가 데이터로 리스트 변환
  for (let i = 0; i < correctNum.length; i++) {
    states.list.push(response[correctNum[i]]);
  }
  //정답을 뺀 240개를 => 국가 데이터로 리스트 변환
  for (let index = 0; index < arr.length; index++) {
    states.wrongList.push(response[arr[index]]);
  }

  getThreeWrong()
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
