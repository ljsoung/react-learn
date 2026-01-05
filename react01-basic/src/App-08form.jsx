import { useState } from "react"; //모듈 임포트

function WriteForm(props){
  return(<>
    <form onSubmit={(e) => { // 이벤트 핸들러에 함수 정의
      console.log("이벤트객체e", e);
      e.preventDefault(); // 기본 동작 차단
      let gubun = e.target.gubun.value; // target 속성으로 입력값 가져오기
      let title = e.target.title.value;
      props.writeAction(gubun, title); // 프롭스로 받은 함수를 통해 컴포넌트로 값 전송
    }}>
      <select name="gubun"> {/* 폼 구성 */}
        <option value="front">프론트엔드</option>
        <option value="back">백엔드</option>
      </select>
      <input type="text" name="title"/>
      <input type="submit" value="추가"/>
    </form>
  </>)
}

function App() {
  const[message, setMessage] = useState('폼값 검증 진행 중'); // 상태 생성
  return(<>
    <div>
      <h2>React-Form</h2>
      <WriteForm writeAction={(gu, ti) => { // UI에 폼 추가 및 프롭스로 함수 전달
        if(gu != '' && ti != ''){
          let frmValue = `검증 완료 폼값 : ${gu}, ${ti}`;
          setMessage(frmValue);
        } else{
          alert("빈 값 있음");
        }
      }}>
      </WriteForm>
      <pre>{message}</pre> {/* 메시지 출력 */}
    </div>
  </>)
}
export default App;