import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit() {
    const navigate = useNavigate(); // 화면 이동, 파라미터 조회를 위한 훅
    const params = useParams();
    // API 호출을 위한 요청 URL
    let requestUrl = 'http://nakja.co.kr/APIs/php7/boardViewJSON.php';
    let parameter = "tname=board_apis&idx="+params.idx;
    parameter += "&apikey=b60aff69ed3845ba5d94dd6c4f18038d"

    const [writer, setWriter] = useState(''); // 수정 폼의 입력값 변경을 위한 상태
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    useEffect(function(){ // API 요청
        fetch(requestUrl + "?" + parameter)
        .then((result) => {
            return result.json();
        })
        .then((json) => {
            setWriter(json.name);
            setTitle(json.subject);
            setContents(json.content);
        });
    }, [])

    return(<>
        <header>
            <h2>게시판-수정</h2>
        </header>
        <nav>
            <Link to="/list">목록</Link>
        </nav>
        <article>
            <form onSubmit={(event) => {
                event.preventDefault();
                fetch('http://nakja.co.kr/APIs/php7/boardEditJSON.php', {
                    method:"POST",
                    headers: {
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
                    },
                    body: new URLSearchParams({ // 폼값을 쿼리스트링 형식으로 구성
                        tname: 'board_apis',
                        idx: params.idx,
                        name: event.target.writer.value,
                        subject: event.target.title.value,
                        content: event.target.contents.value,
                        apikey: 'b60aff69ed3845ba5d94dd6c4f18038d',
                    }),
                })
                .then((response) => response.json())
                .then((json) => console.log(json));

                navigate("/view/"+params.idx);
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th> {/* 수정을 위한 입력 상자 구성 */}
                            <td><input type="text" name="writer" value={writer} onChange={(event) => {setWriter(event.target.value)}} /></td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" name="title" value={title} onChange={(event) => {setTitle(event.target.value)}} /></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea name="contents" rows="3" value={contents} onChange={(event) => {setContents(event.target.value)}}></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="수정" /> {/*수정 버튼 */}
            </form>
        </article>
    </>);
}

export default Edit;