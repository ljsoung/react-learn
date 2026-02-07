import { configureStore } from "@reduxjs/toolkit"; // 스토어 생성 시 사용되는 configureStore 임포트
import counterReducer from './counterSlice' // 슬라이스 임포트

export const store = configureStore({ // 스토어 생성 및 익스포트
    reducer: { // 상태 변경을 위한 리듀서 함수 등록
        myCounter: counterReducer,
    },
});