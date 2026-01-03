function FrontComp(props){
  {/* props를 통해 전달한 프롭스를 한꺼번에 받음 */}
  return (<>
    {/* <a> 태그에 onClink 이벤트 핸들러 사용, 클릭 시 프롭스로 받은 onMyEvent1() 함수 실행 */}
    <li><a href="/" onClick={() => {
      props.onMyEvent1();
    }}>프론트엔드</a></li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
  </>)
}

function App() {
  return (<>
    <h2>React-Event</h2>
    <ol>
      {/*프롭스 onMyEvent1에 이름 없는 화살표 함수를 전달 */}
      <FrontComp onMyEvent1={() =>{
        alert('프론트엔드 클릭됨(부모전달)');
      }}></FrontComp>
    </ol>
  </>)
}
export default App