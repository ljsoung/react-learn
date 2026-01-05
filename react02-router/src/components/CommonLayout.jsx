import { Outlet } from "react-router-dom"

const CommonLayout = () => {
    return(
        <div>
            <header style={{backgroundColor:'lightgray', padding:'10px'}}>
                Outlet  컴포넌트 알아보기
            </header>
            <article>
                <Outlet /> {/* 자식 컴포넌트가 렌더링될 위치를 Outlet으로 지정 */}
            </article>
            <footer style={{background:'lightgray', padding:'10px'}}>
                공통 레이아웃
            </footer>
        </div>
    );
};

export default CommonLayout