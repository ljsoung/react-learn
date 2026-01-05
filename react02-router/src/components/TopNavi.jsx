import { Link, NavLink } from "react-router-dom"; // Link, NavLink 컴포넌트 임포트

const TopNavi = () => {
    return(
        <nav>
            <a href="/">Home</a>&nbsp; {/* <a> 태그로 링크 걸기 */}
            <NavLink to="/intro">인트로</NavLink>&nbsp; {/* <NavLink> 컴포넌트로 링크 걸기 */}
            <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
            <Link to="/xyz">잘못된URL</Link>&nbsp; {/* <Link> 컴포넌트로 링크 걸기 */}
        </nav>
    )
}
export default TopNavi;