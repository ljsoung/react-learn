import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice";

const ReduxBasicApp = () => {
    // 스토어에 등록된 상태 변수 가져오기
    const count = useSelector((nowState) => nowState.myCounter.myValue);
    const dispatch = useDispatch(); // 디스패치 가져오기
    return(<>
        <h2>Redux 기본사용법</h2>
        <h3>현재 값: {count}</h3>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(reset())}>리셋</button>
    </>);
};

export default ReduxBasicApp;