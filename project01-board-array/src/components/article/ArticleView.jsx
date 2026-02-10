function ArticleView(props){
    return (
        <article>
            <table id="boardTable">
                <colgroup>
                    <col width="30%" /><col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{props.selectRow.writer}</td> {/* 프롭스로 전달받은 객체를 출력 */}
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{props.selectRow.title}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td>{props.selectRow.date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            {props.selectRow.contents}
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
}

export default ArticleView;