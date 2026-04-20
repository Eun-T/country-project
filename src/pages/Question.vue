<template>
  <div class="question-container">
    <QuizCard width="1000px" height="550px">
      <div class="question-card">
        <div class="question-progress">
          <QuizProgress
            v-for="(progress, index) in states.progresses"
            :key="index"
            :progress="progress"
            :problemNUm="problemNUm"
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
          <PrimaryBtn width="250px" height="60px" @click="goToNext">
            {{wrongChoices?.value}}
          </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext">
            스웨덴
          </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext">
            스웨덴
          </PrimaryBtn>
          <PrimaryBtn width="250px" height="60px" @click="goToNext">
            스웨덴
          </PrimaryBtn>
          <!-- {{ getRandom3 }} -->
            {{ wrongList[3]?.name.common }}
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
const listNum = ref(0);
const arr = ref(Array.from({ length: 250 }, (_, i) => i));
const wrongChoices = ref([]);
// const wrongList = ref([])
const allCountries = ref([]);

const getWrong = () => {
  const result = []

  while(result.length < 3){
    let num = Math.floor(Math.random() * 250)
    if(arr.value.includes(num)){
      result.push(num)
    }
  }
  wrongChoices.value = result
}

const wrongList = computed(() => {
  return wrongChoices.value.map(index => store.axiosQuiz[index]);
})


//문제 깃발,이름,사진 등등 => 결국 이놈이 정답
const computeNum = computed(() => {
  return states.list[problemNUm.value];
});

console.log(computeNum);

//무작위로 10개 뽑고 이걸 리스트에 대입 =>
// 1. 버튼 정답값 무작위로 설정,
// 2. 맞던 틀린던 스코어점수값 감지
// 3. 4개 이하면 바로 결과창으로 이동

const goToNext = () => {
  problemNUm.value++;
  // router.push
};

onMounted(async () => {
  const response = await store.axiosQuiz();
  const copyResponse = [...response]
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
    states.list.push(response[num[i]]);
  }

  //정답만 뺸 240개의 리스트 = arr
  for (let index = 0; index < num.length; index++) {
    const i = arr.value.findIndex((u) => u === num[index]);
    arr.value.splice(i, 1);
  }

    getWrong()

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
