import { useRef, useState } from "react";

const UseRefExam1 = () => {
    const [stateNum, setStateNum] = useState(0); // 상태 변수 생성
    const refNum = useRef(0); // Ref 변수 생성
    let myNum = 0; // 일반 변수 생성, 리렌더링할 때 초기화해버림

    const plusState = () => {
        setStateNum(stateNum + 1);
        console.log('State증가', stateNum);
    }

    const plusRef = () => {
        refNum.current = refNum.current + 1;
        console.log('Ref증가', refNum.current);
    }

    const plusMyNum = () => {
        console.log('일반 변수 증가', ++myNum);
    };

    return (
        <>
        <h2>useRef 사용하기1</h2>  
        <div>
            <p>State : {stateNum}</p> {/* 변숫값 출력 */}
            <p>Ref : {refNum.current}</p>
            <p>myNum : {myNum}</p>
            <button onClick={plusState}>State증가</button>
            <button onClick={plusRef}>Ref증가</button>
            <button onClick={plusMyNum}>myNum증가</button>
        </div>
    </>
    );
}
export default UseRefExam1;