export default function FrontComp(props){
  return (<>
    <li><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onSetMode('front'); {/* 이벤트 처리 시 함수를 실행하며 "front"를 올려보냄 */}
    }}>프론트엔드</a></li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>Javascript</li>
      <li>jQuery</li>
    </ul>
  </>)
}