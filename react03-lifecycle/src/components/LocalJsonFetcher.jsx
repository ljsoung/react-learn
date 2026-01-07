import { useEffect, useState } from "react";

const GlobalTop = (props) => {
    console.log('1.컴포넌트 실행');
    const [myList, setMyList] = useState([]); // 데이터 저장을 위한 상태 생성
    useEffect(() => { // 컴포넌트 렌더링 후 실행할 코드 작성
        console.log('3.useEffect 실행');
        fetch('./json/myData.json') // 내부 JSON 파일을 GET 방식으로 요청해서 내용 읽기
        .then((result) => {
            return result.json(); // json 꺼내기
        })
        .then((json) => {
            console.log(json); 
            setMyList(json); // 꺼낸 json 사용, 상태 변경으로 인해 재렌더링
        });
    }, []);
    
    let listTag = myList.map((data) => { // myList에 있는 객체 꺼냄
        return (
            <li key={data.id}>
                <a href={data.id} data-id={data.num} onClick={(e) =>{
                    e.preventDefault();
                    props.myLinkClick(e.target.dataset.id);
                }}>{data.id}</a>
            </li>
        );
    });
    console.log('2.return 실행(rendering)'); // 렌더링 되는 시점을 콘솔에 출력
    return(
        <nav>
            <ul>
                {listTag}
            </ul>
        </nav>
    );
}
const ContentBody = (props) => { // 프롭스로 받은 데이터를 출력하는 컴포넌트
    return (
        <div>
            <h2>{props.myResult.name}</h2>
            <ul>
                <li>num : {props.myResult.num}</li>
                <li>id : {props.myResult.id}</li>
                <li>cell : {props.myResult.cell}</li>
                <li>description : {props.myResult.description}</li>
            </ul>
        </div>
    );
}
function LocalJsonFetcher() {
    const [myResult, setMyResult] = useState({}); // 상세내용 저장을 위한 상태
    return (<>
        <h2>내부 서버 통신</h2>
        {/* 목록 클릭 시 내용을 얻어오기 위한 함수를 프롭스로 전달 */}
        <GlobalTop myLinkClick={(num) => {
            console.log('클릭', num);
            {/* 일련번호 num에 해당하는 JSON 파일 요청 후 내용 얻어오기 */}
            fetch('/json/dto'+num+'.json')
            .then((result) => { 
                return result.json(); // json 꺼내기
            })
            .then((json) => {
                setMyResult(json); // 꺼낸 json 사용
            });
        }}></GlobalTop>
        {/* 내용을 출력하는 컴포넌트를 UI에 추가 */}
        <ContentBody myResult={myResult}></ContentBody>
    </>)
}
export default LocalJsonFetcher;