import FrontComp from "./components/FrontComp";
import BackComp from "./components/BackComp";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('both'); // mode: 상태 변수, setMode: 변경 함수, useState(초기값)
  const handleSetMode = (mode) => { // 상태 변경을 위한 함수 정의
    setMode(mode);
  };
  let contents = ''; // 컴포넌트 저장용 변수
  if(mode == 'front'){
    {/* 상태의 값에 따라 분기하여 FrontComp, BackComp 그리기 */}
    contents = <>
      <FrontComp onSetMode={(mode) => {
        setMode(mode);
      }}></FrontComp>
      </>
  } else if(mode == 'back'){
    contents = <>
    <BackComp setMode={setMode} />
    </>
  }
  else{
    contents = <>
      <FrontComp onSetMode = {(mode) => {
        handleSetMode(mode); // 상태 변경을 위한 함수 실행
      }}></FrontComp>
      <BackComp setMode={handleSetMode} /> {/* 상태 변경을 위한 함수 실행 */}
    </>
  }
  return (<>
    <h2><a href="/" onClick={(event) => {
      event.preventDefault();
      setMode('both'); // React-State라는 제목을 누르면 두 컴포넌트를 모두 그림
    }}>React-State</a></h2>
    <ol>
      {contents}
    </ol>
  </>)
}
export default App