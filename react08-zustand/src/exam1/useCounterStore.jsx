import {create} from 'zustand'; // 상태 저장소를 생성하는 create() 함수 임포트

const usecounterStore = create((set, get) => ({
    count: 0, // 상태를 저장할 변수
    increment: () => { // 상태를 변경하기 위한 함수 정의 (숫자 증가)
        const current = get().count; // get() 함수를 통해 현재 상태값을 읽어옴
        if(current >= 10){
            alert('최댓값은 10입니다.');
            return;
        }
        set({count: current + 1}); // set() 함수를 통해 상태를 변경
    },
    decrement: () => { // 상태를 변경하기 위한 함수 정의(숫자 감소)
        const current = get().count;
        if(current <= 0){
            alert("최솟값은 0입니다.");
            return;
        }
        set({count: current - 1});
    },
    reset: () => set({count : 0}) // 상태를 변경하기 위한 함수 정의(0으로 리셋)
}));

export default usecounterStore;