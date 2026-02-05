import { useActionState } from "react";

async function authLogin(prevState, formData){ // 로그인 처리를 위한 비동기 함수 정의
    console.log('prevState', prevState);
    const userid = formData.get('userid'); // 사용자가 입력한 폼값을 읽음
    const userpw = formData.get('userpw');

    await new Promise(resolve => { // 1초 지연을 위한 코드 (서버의 응답 시간이라 가정)
        setTimeout(resolve, 1000);
    });

    if(userid === "nakja" && userpw === "1234"){ // 로그인 여부에 따른 메시지 반환
        return "로그인 성공";
    } else{
        return "로그인 실패";
    }
}

const UseActionStateExam = () => {
    // useActionState 정의
    const [message, formAction, isPending] = useActionState(authLogin, null);
    return(<>
        <h2>useActionState 사용하기</h2>
        <form action={formAction}>
            아이디 : <input type="text" name="userid" /> <br />
            비밀번호 : <input type="text" name="userpw" /> <br />
            <button type="submit">로그인</button>
            {isPending ? "Loading..." : message} {/*로그인 처리 중 로딩 메시지 출력 */}
        </form>
    </>);
}

export default UseActionStateExam;