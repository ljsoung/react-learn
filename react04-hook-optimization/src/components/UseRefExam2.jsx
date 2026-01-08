import { useEffect, useRef } from "react";

const UseRefExam2 = () => {
    const passRef1 = useRef(); // Ref 변수 생성
    const passRef2 = useRef();

    useEffect (() => { // 렌더링 후 패스워드1 입력 상자에 포커싱
        console.log('passRef', passRef1, passRef2);
        passRef1.current.focus();
    }, []); // 처음 렌더링 1회만 사용

    const checkPassword = () => { // 패스워드 검증 함수 정의
        // 빈 값 검증 및 포커싱
        if(!passRef1.current.value || !passRef2.current.value){ // "" = false
            alert('비밀번호를 입력해주세요');
            passRef1.current.focus();
            return;
        }
        if(passRef1.current.value == passRef2.current.value){ // 패스워드 일치 여부 확인
            alert('비밀번호 확인이 완료되었습니다.');
        } else{ // 패스워드가 일치하지 않는 경우 처리
            alert('비밀번호가 일치하지 않습니다.');
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    }

    return (
        <>
            <h2>useRef 사용하기2</h2>
            <form> {/* 여러 input 값을 모아서 ‘제출(submit)’이라는 행동을 할 때 사용 */}
                {/* 패스워드 입력 상자 */}
                패스워드1 : <input type="text" ref={passRef1} name="pass1" /> <br />
                패스워드2 : <input type="text" ref={passRef2} name="pass2"/> <br />
                {/* 검증 함수 실행 */}
                <button type="button" onClick={checkPassword}>패스워드확인</button>
            </form>
        </>
    );
}
export default UseRefExam2;