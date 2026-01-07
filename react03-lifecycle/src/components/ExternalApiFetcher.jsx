import { useEffect, useState } from "react";

function RandomUser(props){ // 컴포넌트 정의
    const [myJSON, setMyJSON] = useState({results:[]});
    useEffect(function(){
        fetch("https://api.randomuser.me?results=10") // 10개의 데이터 요청
        .then((result) => {
            return result.json(); // json 꺼내기
        })
        .then((json) => {
            console.log(json);
            setMyJSON(json); // 꺼낸 json 사용, 상태가 바뀌면서 리렌더링
        })
    }, []); // 의존성 배열은 빈 배열로 설정하여 딱 한 번만 실행

    let trTag = myJSON.results.map((data) => { // 화면에 출력할 <tr> 태그 구성
        return (
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail} alt={data.login.username} /></td>
                <td><a href="/" onClick={(e) => {
                    e.preventDefault();
                    props.onProfile(data);
                }}>{data.login.username}</a>
                </td>
                <td>{data.name.title} {data.name.first} {data.name.last}</td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });
    return( // UI 렌더링
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}

function ExternalApiFetcher() {
    return(<>
        <h2>외부 서버 통신</h2>
        <RandomUser onProfile={(sData) => { // 사용자 정보 출력을 위한 함수를 프롭스로 전달
            console.log(sData);
            // 출력할 내용 구성, alert를 통해 경고창으로 내용 출력
            let info = `전화번호:${sData.cell} 
                        성별:${sData.gender}
                        username:${sData.login.username}
                        password:${sData.login.password}`;
                        alert(info);
        }}></RandomUser>
    </>);
}
export default ExternalApiFetcher;