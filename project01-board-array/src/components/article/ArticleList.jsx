function ArticleList(props){
    const lists = []; // 게시글 목록을 담을 배열 선언
    for(let i = 0; i < props.boardData.length; i++){ // 게시글 데이터 반복
        let row = props.boardData[i]; // 현재 게시글 데이터 추출
        lists.push( // 게시글 한 행을 lists에 추가
            <tr key={row.no}> {/* 각 행의 고유 key로 게시글 번호 사용 */}
                <td className="cen">{row.no}</td> {/* 게시글 번호 출력 */}
                <td><a href={'/read/'+row.no} onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode(row.no);
                }}>{row.title}</a></td> {/* 게시글 제목에 링크 연결 */}
                <td className="cen">{row.writer}</td>
                <td className="cen">{row.date}</td>
            </tr>
        )
    }
    return(
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
                    {lists} {/* 생성된 게시글 목록 렌더링 */}
                </tbody>
            </table>
        </article>
    );
}

export default ArticleList;