function FrontComp(props){ // 일반 함수 형식으로 작성한 컴포넌트
  const liRows = [];
  // 배열 크기만큼 반복해서 <li> 태그 추가
  for(let i = 0; i < props.propData1.length; i++){
    liRows.push(
      <li key={i}>{props.propData1[i]}</li> // 중복되지 않는 key prop 추가
    );
  }
  return (
    <>
    <li>{props.frTitle}</li> {/*타이틀 출력*/}
    <ul>
        {liRows} {/*앞에서 생성한 값을 UI에 추가*/}
    </ul>
    </>
  )
}

// props 객체를 구조분해하여 필요한 것만 추출
const BackComp = ({propData2, baTitle}) => {
  const liRows = [];
  let keyCnt = [];
  for(let row of propData2){
    liRows.push(
      <li key={keyCnt++}>{row}</li>
    );
  }
  return (<>
    <li>{baTitle}</li> {/*타이틀 출력*/}
    <ul>
      {liRows} {/*앞에서 생성한 값을 UI에 추가*/}
    </ul>
  </>)
}

function App(){
  // 데이터를 배열로 선언
  const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'React추가'];
  const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot', 'NextJs추가'];
  return(<>
    <div>
      <h2>React - Props</h2>
      <ol> {/* UI에 추가한 후 자식 컴포넌트로 데이터를 프롭스로 전달 */}
        <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
        <BackComp propData2={backData} baTitle="백엔드"></BackComp>
      </ol>
    </div>
  </>)
}
export default App