import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List(){
    const [boardData, setBoardData] = useState([]); // 게시판 데이터 저장을 위한 상태
    let requestUrl = "http://nakja.co.kr/APIs/php7/boardListJSON.php"; // 요청URL과 파라미터 정의
    let parameter = "tname=board_apis";
    parameter += "&apikey=b60aff69ed3845ba5d94dd6c4f18038d";

    useEffect(function(){ // API 서버에 데이터 요청. 응답받은 데이터를 통해 상태 변경
        fetch(requestUrl +"?"+ parameter)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            console.log(json);
            setBoardData(json);
        })
    }, []);

    let lists = boardData.map((row) => { // 게시글 목록을 반복 출력
        let date = row.regdate.substring(0, 10);
        let subject = row.subject.substring(0, 20);
        return(
            <tr key={row.idx}> {/* 게시글의 고유 번호로 고유한 key값 지정 */}
                <td className="cen">{row.idx}</td>
                <td><Link to={"/view/"+row.idx}>{subject}</Link></td> {/* 열람을 위한 링크 */}
                <td className="cen">{row.name}</td>
                <td className="cen">{date}</td>
            </tr>
        );
    });

    return(<> {/* 목록 화면 구성 */}
        <header>
            <h2>게시판-목록</h2>
        </header>
        <nav>
            <Link to={"/write"}>글쓰기</Link>
        </nav>
        <article>
            <table id="boardTable">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {lists} {/* 게시글 출력 */}
                </tbody>
            </table>
        </article>
    </>);
}

export default List;