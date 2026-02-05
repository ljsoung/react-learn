import { useState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(formData){ // 폼값 제출 시 호출되는 비동기 함수 정의
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`"${formData.get("name")}" 님의 요청이 완료되었습니다.`);
        }, 1000);
    });
}

const SubmitButton = () => { // 제출 버튼을 컴포넌트로 정의
    //useFormStatus 훅 정의
    const {pending, data, method, action} = useFormStatus();
    console.log('data', data);
    console.log('method', method);
    console.log('action', action);
    return (
        // 버튼 정의, 제출 상태에 따라 텍스트 변경됨
        <button type="submit" disabled={pending}>
            {pending ? "제출중..." : "제출"}
        </button>
    );
};

const UseFormStatusExam = () => {
    const [message, setMessage] = useState(""); // 제출 결과 메시지를 상태로 정의

    const handleSubmit = async (formData) => { // <form>의 action속성에 연결함 함수 정의
        const result = await submitForm(formData);
        setMessage(result);
    };

    return (
        <>
        <h2>useFormStatus 사용하기</h2>
        <form action={handleSubmit}> {/*<form> 정의*/}
            <label>
                이름: <input type="text" name="name" required />
            </label>
            <SubmitButton /> {/*제출 버튼을 컴포넌트로 추가*/}
        </form>
        {message && <p>{message}</p>}
        </>
    );
}

export default UseFormStatusExam;