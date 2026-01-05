import jqueryLogo from './assets/jquery.png'; // 이미지 임포트

function App(){
  const myStyle = { // 객체 형식으로 스타일 지정
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Verdana"
  };
  const iWidth = {maxWidth:'300px'};
  return(
      <>
      <h2>React-Style</h2>
      <ol>
          <li style={{color: "red"}}>프론트엔드</li> {/* style 속성을 사용하는 인라인 방식 */}
          <ul>
              <li><img src="/img/html_css_js.png" style={iWidth} /></li> {/* public 하위의 이미지 삽입 */}
              <li><img src={jqueryLogo} style={iWidth} /></li> {/* 임포트한 이미지 삽입 */}
              <li><img src="http://nakja.co.kr/images/reactjs.png" style={iWidth} /></li> {/* 웹 URL을 이용한 이미지 삽입 */}
          </ul>
          <li className='backEnd'>백엔드</li>
          <ul>
              <li id='backEndSub'>Java</li> {/* id 속성은 HTML과 동일하게 사용 */}
              <li class='warnings'>Oracle</li> {/* class 속성 사용 시 콘솔에서 경고 표시됨*/}
              <li style={myStyle}>JSP</li> {/* 객체 형식으로 지정한 스타일을 적용 */}
              <li>Spring Boot</li>
          </ul>
      </ol>
      </>
  )
}
export default App;