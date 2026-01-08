import { useCallback, useEffect, useState } from "react"

// DivBox컴포넌트 정의. 2개의 프롭스를 전달받음
const DivBox = ({fnBoxStyle, numberVar}) => {
    // 컴포넌트에 적용할 스타일을 상태로 정의
    const [myStyle, setMyStyle] = useState({});
    // fnBoxStyle() 함수의 반환값으로 상태를 변경해서 DivBox 스타일 변경
    useEffect(() => {
        console.log('박스 스타일 변경');
        setMyStyle(fnBoxStyle());
    }, [fnBoxStyle]);

    return <div style={myStyle}>{numberVar}</div> // UI 렌더링
}

const UseCallbackExam = () => {
    const [boxSize, setBoxSize] = useState(100); // 상태 변수(박스 크기)
    const [boxColor, setBoxColor] = useState(0); // 상태 변수(배경색 배열의 인덱스)
    const [number, setNumber] = useState(0); // 상태 변수 (표시할 숫자)
    const colorArr = ['red', 'green' ,'blue']; // 박스의 배경색으로 사용할 배열

    // step1 useCallBack 훅 적용 전의 코드
    /*
    const fnBoxStyle = () => {
        return{
            backgroundColor : `${colorArr[boxColor]}`,
            width : `${boxSize}px`, height : `${boxSize}px`,
            textAlign: 'center', lineHeight: `${boxSize}px`
        };
    }
        */

    // step2 useCallback 훅 적용 후의 코드
    const fnBoxStyle = useCallback(() => {
        return{
            backgroundColor : `${colorArr[boxColor]}`,
            width : `${boxSize}px`, height : `${boxSize}px`,
            textAlign: 'center', lineHeight: `${boxSize}px`
        }
    }, [boxSize, boxColor]);

    return(<>
        <h2>useCallback 사용하기</h2> {/* UI 렌더링 */}
        <button onClick={() => setBoxSize(boxSize + 10)}>크기 증가</button>
        <button onClick={() => setBoxColor((boxColor + 1) % 3)}>컬러변경</button>
        <button onClick={() => setNumber((number + 1))}>숫자변경</button>
        {/* 프롭스를 통해 함수와 상태 전달 */}
        <DivBox fnBoxStyle={fnBoxStyle} numberVar={number} />
    </>);
}

export default UseCallbackExam;