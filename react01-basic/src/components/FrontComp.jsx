export default function FrontComp(props){
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