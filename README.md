📒 프로젝트 이름

Country Quiz

🚀 소개

이 프로젝트는 간단한 국가 퀴즈 만들기입니다.

🛠️ 기술 스택
Vue 3
Vite
Pinia
Axios

📂 폴더 구조
src/
├─ components/
├─ assets/
├─ router/
├─ pages/
├─ api/
├─ stores/

⚙️ 실행 방법
npm install
npm run dev

📸 화면

(스크린샷 넣기)


✨ 주요 기능
기능 1
기능 2
기능 3

📌 느낀 점 / 개선할 점
(느낀점)
1. Slot을 활용하여 자식 컴포넌트에 유연하게 콘텐츠를 전달하는 방법을 학습
2. Flexbox를 이용한 세로 중앙 정렬 시 부모 요소의 height 설정이 중요함을 이해
3. 재사용 가능한 버튼 컴포넌트 설계 시 <button> 태그 사용의 중요성 인지
4. Axios를 활용한 API 통신 및 비동기 데이터 처리 흐름 학습
5. 컴포넌트의 역할 분리를 통한 유지보수성과 재사용성을 고려한 설계 경험
6. for문을 map으로 바꿔라 ( 더 쉽다 ㄹㅇ임... )
 for (let i = 0; i < correctNum.length; i++) {
    states.list.push(response[correctNum[i]]);
  }

 =>  states.list = correctNum.map(num => response[num]);

(개선할 점)
