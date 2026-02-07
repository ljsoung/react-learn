import { configureStore } from "@reduxjs/toolkit"; //스토어 생성을 위한 configureStore() 함수 임포트
import todoReducer from './todoSlice'

export const store = configureStore({ // 스토어 생성 및 리듀서로 todoReducer 등록
    reducer: {
        todos: todoReducer,
    },
});