import { useLocation, useSearchParams } from "react-router-dom" // 라우터 훅 임포트

const RouterHooks = () => {
    const location = useLocation(); // useLocation 훅 선언
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get('mode'); // 쿼리스트링으로 전달되는 파라미터를 얻어옴
    const pageNum = searchParams.get('pageNum');

    const changeMode = () => { // mode의 값을 변경하는 함수 정의
        const nextMode = (mode == 'list') ? 'view' : 'list';
        setSearchParams({ // 파라미터 중 mode는 변경하고 pageNum은 그대로 유지
            mode: nextMode,
            pageNum
        });
    }

    const nextPage = () => { // 페이지 번호를 증가시키는 함수 정의
        let nextTemp = (pageNum == null || isNaN(pageNum)) ? 1 : parseInt(pageNum) + 1;
        setSearchParams({
            mode,
            pageNum: nextTemp
        });
    }

    const prevPage = () => { // 페이지 번호를 감소시키는 함수 정의
        let pageTemp = (pageNum == null || isNaN(pageNum)) ? 1 : parseInt(pageNum) - 1;
        setSearchParams({
            mode,
            pageNum: pageTemp
        });
    }

    return(<>
        <h2>라우터 관련 Hook</h2>
        <div>
            <ul>
                <li>URL: {location.pathname}</li> {/* 현재 페이지 경로와 쿼리스트링 전체 출력 */}
                <li>쿼리스트링: {location.search}</li>
                <li>mode: {mode}</li> {/* 쿼리스트링에서 mode와 pageNum 출력 */}
                <li>pageNum : {pageNum}</li>
            </ul>
            <button onClick={changeMode}>mode변경</button> {/* 버튼 정의 */}
            <button onClick={prevPage}>이전Page</button>
            <button onClick={nextPage}>다음Page</button>
        </div>
    </>);
}

export default RouterHooks;