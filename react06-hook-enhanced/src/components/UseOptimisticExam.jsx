// async -> 비동기

import { useOptimistic, useRef, useState } from "react";

// 메시지를 서버로 전송하는 것을 표현한 함수 정의
async function deliverMessage(message){
    // 1초간 대기 후 반환
    /*
    Promise 한 줄 정의부터

👉 Promise는 “나중에 결과를 주겠다고 약속한 객체”야.

    지금은 결과가 없을 수도 있지만
    성공하거나 / 실패하면 꼭 알려줄게 ← 이게 Promise

    “1초 뒤에 끝나는 Promise를 기다리고
    그 다음에 message를 return 한다”
    */
    await new Promise((res) => setTimeout(res, 1000));
    return message;
}

function Thread({messages, sendMessage }){
    const formRef = useRef(); // 폼 초기화용 변수 (렌더링되어도 값 변동 X)

    async function formAction(formData){ // 폼 제출 시 실행되는 비동기 함수
        addOptimisticMessage(formData.get("message")); // 메시지를 UI에 즉시 추가
        formRef.current.reset(); // form 초기화
        await sendMessage(formData); // 메시지를 서버로 전송
    }

    // useOptimistic 훅을 사용하여 낙관적 메시지 상태 정의
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sending: true
            }
        ]
    );

    return (<> { /* 화면을 보여줄 때 */ }
        { /* 메시지 목록을 개수만큼 반복해서 렌더링 */ } 
        {optimisticMessages.map((message, index) => (
            <div key={index}>
                {message.text}
                {!!message.sending && <small> (Sending...)</small>}
            </div>
        ))}
        <form action={formAction} ref={formRef}> { /*새로운 메시지 입력을 위한 폼*/ }
            <input type="text" name="message" placeholder="메시지를 입력해주세요"/>
            <button type="submit">Send</button>
        </form>
    </>);
}

const UseOptimisticExam = () => { // 실제 상태를 가진 부모
    // 메시지는 상태를 통해 관리
    const [messages, setMessages] = useState([
        {text: "기본 메시지 입니다", sending: false, key: 1}
    ]);

    async function sendMessage(formData){ // 서버 전송 함수
        const sentMessage = await deliverMessage(formData.get("message"));
        setMessages((messages) => [...messages, {text:sentMessage}]);
    }

    return (
        <div>
            <h2>useOptimistic 사용하기</h2> {/* 전체 화면 구성 */}
            <Thread messages={messages} sendMessage={sendMessage} />
        </div>
    );
};

export default UseOptimisticExam;