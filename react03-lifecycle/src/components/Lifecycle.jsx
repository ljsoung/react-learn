import { useEffect, useState } from "react"; // useState, useEffect 훅 임포트

function MoveBox(props){
    console.log('LifeCycle==>1.컴포넌트 실행(함수 호출)'); // 첫 번째로 실행되는 코드
    
    // 박스 위치 설정을 위한 상태 설정
    const [position, setPosition] = useState(props.initPosition);
    const [leftCount, setLeftCount] = useState(1);
    const boxStyle = { // 박스 스타일 지정
        backgroundColor: 'red', position: 'relative', textAlign: 'conter',
        width: '100px' ,height: '100px', margin: '10px', lineHeight: '100px',
        left: `${position}px`
    };

    const moveLeft = () => { // 박스를 좌측으로 이동하는 함수
        setPosition(() => position - 20);
        setLeftCount(() => leftCount + 1);
    };
    const moveRight = () => { // 박스를 우측으로 이동하는 함수
        setPosition(() => position + 20);
    };

    useEffect(function(){ // useEffect 훅으로 렌더링된 후 실행할 코드 추가
        console.log('useEffect 실행 ==>3.컴포넌트 마운트');
        return () => {
            console.log('useEffect 실행 ==> 4. 컴포넌트 언마운트');
        }
    }, []);

    console.log('return 실행 ==> 2. 렌더링(return 문)'); // 두 번째로 실행되는 코드
    return(
        <div>
            <h4>함수형 컴포넌트의 생명주기</h4>
            <div style={boxStyle}>{leftCount}</div> {/* 박스와 좌우측 이동을 위한 버튼 */}
            <input type="button" value="좌측이동" onClick={moveLeft} />
            <input type="button" value="우측이동" onClick={moveRight} />
        </div>
    );
}

function LifeCycle() {
    return(<>
        <h2>React Hook - useEffect</h2>
        <MoveBox initPosition={50} /> {/* 박스 컴포넌트를 UI에 추가 */}
    </>);
}

export default LifeCycle;