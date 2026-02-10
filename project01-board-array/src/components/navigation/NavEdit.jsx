function NavEdit(props){
    return(
        <nav>
            <a href="/" onClick={function (event) { // 뒤로 링크 정의
                event.preventDefault();
                props.onBack();
            }}>뒤로</a>
            <a href="/" onClick={function (event) { // 목록 링크 정의
                event.preventDefault();
                props.onChangeMode();
            }}>목록</a>
        </nav>
    );
}

export default NavEdit;