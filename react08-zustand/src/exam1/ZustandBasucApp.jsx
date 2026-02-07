import usecounterStore from "./useCounterStore";

function ZustandBasicApp() {
    // useCounterStore()를 호출하여 변수와 함수를 모두 가져옴
    const {count, increment, decrement, reset } = usecounterStore();

    return(<>
        <h2>Zustand 기본 사용법</h2>
        <h3>현재 값: {count}</h3> {/*상태 변수 출력 및 버튼 */}
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>초기화</button>
    </>)
}

export default ZustandBasicApp;