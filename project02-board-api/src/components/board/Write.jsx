import { Link, useNavigate } from "react-router-dom";

function Write() {
    const navigate = useNavigate(); // 화면 이동을 위한 훅

    return(<> {/* 작성을 위한 UI 구성 */}
        <header>
            <h2>게시판-작성</h2>
        </header>
        <nav>
            <Link to="/list">목록</Link>
        </nav>
        <article>
            <form onSubmit={(event) => {
                event.preventDefault();
                fetch('http://nakja.co.kr/APIs/php7/boardWriteJSON.php', {
                    method: 'POST',
                    headers: {
                        'Content-type':'application/x-www-form-urlencoded;charset=UTF-8',
                    },
                    body: new URLSearchParams({
                        tname: 'board_apis',
                        name: event.target.writer.value,
                        subject: event.target.title.value,
                        content: event.target.contents.value,
                        apikey: 'b60aff69ed3845ba5d94dd6c4f18038d',
                    }),
                })
                .then((response) => response.json())
                .then((json) => console.log(json));

                navigate("/list"); // 목록 페이지로 이동
            }}>
               <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td><input type="text" name="writer"/></td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input type="text" name="title" /></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea name="contents" rows={"3"}></textarea></td>
                        </tr>
                    </tbody>
                    <input type="submit" value={"작성"}/>
                </table> 
            </form>
        </article>
    </>);
}

export default Write;