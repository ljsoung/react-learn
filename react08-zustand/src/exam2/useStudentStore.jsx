import { create } from "zustand";
import {devtools, persist} from "zustand/middleware"

// 미들웨어 형식에 맞춘 사용자정의 로깅 함수
const logger = (config) => (set, get, api) =>
    config(
        (...args) => { // set()이 호출될 때마다 로그를 출력하는 함수
            console.log('[Zustand 로그', ...args);
            set(...args);
        },
        get, api // get과 api는 미들웨어가 가로채지 않고 그대로 넘김
    );

const useStudentStore = create( // 상태 저장소 생성 및 미들웨어 적용
    logger( // logger() 함수 시작
        devtools( // devtools() 시작 -> Redux DevTools와 연동 가능하게 하는 미들웨어
            persist( // persist() 시작 -> 상태를 로컬 스토리지에 저장해서 새로고침해도 유지되도록 함
                (set) => ({
                    // 초기 상태 정의
                    students: [{id:Date.now(), name:'성유겸', isHere: false}],
                    count: 1,
                    addStudent: (name) => // 학생 추가 함수
                        set((state) => ({
                            students: [...state.students, {id: Date.now(), name, isHere: false}],
                            count : state.count + 1,
                        }), false, 'addStudent'),
                    deleteStudent: (id) => // 학생 삭제 함수
                        set((state) => ({
                            students: state.students.filter((student) => student.id !== id),
                            count : state.count - 1,
                        }), false, 'deleteStudent'),
                    toggleAttendance: (id) => // 출석 상태 토글 함수
                        set((state) => ({
                            students: state.students.map((student) =>
                                student.id === id ? {...student, isHere: !student.isHere} : student),
                        }), false, 'toggleAttendance'),
                }),
                {name: 'student-storage',} // 로컬 스토리지에 상태 저장(persist 설정). localStorage에 표시되는 key 이름
            ), // persist 끝
            {name: 'StuentStore'} // Redux DevTools에 상태 저장소를 등록. Redux Devtools에서 표시되는 store 이름
        ) // devtools 끝
    ) // logger 끝
);

export default useStudentStore;