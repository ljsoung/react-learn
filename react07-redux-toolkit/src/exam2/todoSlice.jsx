import { createSlice } from "@reduxjs/toolkit";

let nextIdx = 2; // 할 일 추가 시 고유한 idx값을 부여하기 위한 변수 선언

const todoSlice = createSlice({ // 슬라이스 정의
    name: 'myTodos', // 슬라이스의 이름
    initialState:[ // 상태의 초깃값
        {idx: 1, contents: '리덕스툴킷공부', done: false}
    ],
    reducers: {
        addTodo: (prevState, action) => { // 할 일 추가 함수
            prevState.push({idx:nextIdx++, contents:action.payload, done: false});
        },
        toggleTodo: (prevState, action) => { // 할 일 토글 함수
            const todoRow = prevState.find(t => t.idx === action.payload);
            if(todoRow) todoRow.done = !todoRow.done;
        },
        deleteTodo: (prevState, action) => { // 할 일 삭제 함수
            return prevState.filter(t => t.idx !== action.payload);
        },
    },
});

// 슬라이스에서 정의한 리듀서 함수명으로 액션 생성 함수 익스포트
export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer; // 리듀서 익스포트