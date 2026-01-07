import { NavLink } from "react-router-dom"

const TopNavi = () => {
    return(
        <nav> {/* 링크 설정 */}
            <NavLink to="/">생명주기</NavLink>&nbsp;
            <NavLink to="/local">내부통신</NavLink>&nbsp;
            <NavLink to="/external">외부통신</NavLink>&nbsp;
        </nav>
    );
}

export default TopNavi;