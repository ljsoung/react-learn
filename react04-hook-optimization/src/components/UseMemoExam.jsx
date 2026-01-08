import { useMemo, useState } from "react";

const isPrime = (num) => { // 실행 시간이 많이 걸리는 작업을 수행하는 함수
    console.log('소수 판단중..');
    for (let exCost = 1; exCost < 1234567890; exCost++) { // 12억 번 반복
        /* 실행 비용이 높은 연산으로 가정 */
    }
    if(num <= 1) return false; // 숫자가 소수인지 판단하는 로직
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
};

const UseMemoExam = () => { // 컴포넌트 정의
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    // step1 useMemo 도입하기 전의 코드, number와 text의 상태가 변경될 때마다 리렌더링됨
    // const checkPrime = isPrime(number);

    // step2 useMemo 훅을 도입한 후의 코드
    const checkPrime = useMemo(() => isPrime(number), [number]);
    return (<>
        <h2>useMemo 사용하기</h2>

        {/* 입력 상자의 값이 변할 때마다 number의 상태가 변경되어 리렌더링됨 */}
        <input type="number"  value={number} placeholder="소수 판단할 숫자 입력" 
        onChange={(e) => setNumber(parseInt(e.target.value))}/>
        <p>정수 {number}는 {checkPrime ? '소수 0' : '소수 X'}</p> {/* 정수 출력 */}
        
        {/* 텍스트를 입력할 때마다 상태가 변경되어 리렌더링됨 */}
        <input type="text" value={text} placeholder="이름 입력(소수 판단과 무관)"
        onChange={(e) => setText(e.target.value)}/>
        <p>입력한 이름 : {text}</p>
    </>);
}
export default UseMemoExam;