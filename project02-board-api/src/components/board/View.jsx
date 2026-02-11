import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function View() {
    const navigate = useNavigate();
    const params = useParams(); // 게시물의 일련번호를 읽기 위한 훅
    const [boardData, setBoardData] = useState({}); // 게시글 데이터 저장용 상태
    // API 요청을 위한 URL 설정
    let requestUrl = "http://nakja.co.kr/APIs/php7/boardViewJSON.php";
    let parameter = "tname=board_apis&idx="+params.idx;
    parameter += "&apikey=b60aff69ed3845ba5d94dd6c4f18038d";

    useEffect(function (){ // 첫 렌더링 후 API 요청
        fetch(requestUrl + "?" + parameter)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            setBoardData(json);
        });
    }, []);

    return (<>
        <header>
            <h2>게시판-열람</h2>
        </header>
        <nav>
            <Link to="/list">목록</Link>
            <Link to={"/edit/"+params.idx} >수정</Link>
            <Link onClick={() => { // 삭제 링크
                if(window.confirm("삭제하시겠습니까?")){
                    fetch("http://nakja.co.kr/APIs/php7/boardDeleteJSON.php", {
                        method:"POST",
                        headers: {
                            'Contents-type':'application/x-www-form-urlencoded;charset=UTF-8',
                        },
                        body: new URLSearchParams({ // 폼값을 쿼리스트링 형식으로 구성
                            tname: 'board_apis',
                            idx: params.idx,
                            apikey: 'b60aff69ed3845ba5d94dd6c4f18038d',
                        }),
                    })
                    .then((result) => {
                        return result.json();
                    })
                    .then((json) => {
                        if(json.result === 'success'){ // 성공 시 목록으로 이동
                            alert("삭제되었습니다.");
                            navigate("/list");
                        }
                    })
                }
            }}>삭제</Link>
        </nav>
        <article>
            <table id="boardTable">
                <colgroup>
                    <col width="20%" /><col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{boardData.name}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{boardData.regdate}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{boardData.subject}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        {/*<td>{boardData.content}</td> -> 마크업 적용x*/}
                        <td dangerouslySetInnerHTML={{__html: boardData.content}} style={{'whiteSpace':'pre-wrap'
                        }}></td>
                    </tr>
                </tbody>
            </table>
        </article>
    </>);
}

export default View;