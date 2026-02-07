import { createSlice } from '@reduxjs/toolkit'; // createSlice() 함수를 임포트

const counterSlice = createSlice({ // createSlice() 함수로 슬라이스 정의
    name: 'mycounter', // 슬라이스 이름
    initialState: {myValue: 0}, // 상태의 초깃값
    reducers: { // 상태 변경을 위하 리듀서 함수 정의(증가, 감소, 리셋)
        increment: (state) => {
            state.myValue += 1;
        },
        decrement: (state) => {
            state.myValue -= 1;
        },
        reset: (state) => {
            state.myValue = 0;
        }
    }
});

// 액션 생성 함수 익스포트
export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer; // 리듀서 함수 익스포트