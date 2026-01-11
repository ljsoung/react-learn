import { useReducer, useState } from "react";

const bankReducer = (bankState, bankAction) => { // 리듀서 함수 정의
    console.log("리듀서 호출", bankState, bankAction);
    switch(bankAction.mode){ // 매개변수로 받은 액션을 분석하여 상태 변경
        case 'disposit':
            return bankState + bankAction.amount;
        case 'withdraw':
            return bankState - bankAction.amount;
        default:
            return bankState;
    }
}

const UseReducerExam = () => {
   const [inputMoney, setInputMoney] = useState(0); // 입금액 변경을 위한 상태
   const [balance, bankDispatch] = useReducer(bankReducer, 0); 
   return (<>
    <h2>UseReducer 사용하기</h2>
    <p>잔고 : {balance}원</p> {/* 잔고 출력 */}
    <input type="number" value={inputMoney} step={1000} onChange={(e) => { {/* 입출금 금액 상태 변경 */}
        setInputMoney(parseInt(e.target.value));
    }} />
    {/* 입금 버튼을 누르면 bankDispatch() 함수 호출 */}
    <button type="button" onClick={() => {
        bankDispatch({mode:'disposit', amount:inputMoney});
    }}>입금</button>
    <button type="button" onClick={() => {
        bankDispatch({mode:'withdraw', amount:inputMoney});
    }}>출금</button>
   </>);
}

export default UseReducerExam;