import { Route, Routes } from "react-router-dom"; // Routes, Route 컴포넌트 임포트
import TopNavi from "./components/TopNavi"; // 작성한 컴포넌트 임포트
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import CommonLayout from "./components/CommonLayout";
import LayoutIndex from "./components/LayoutIndex";
import RouterHooks from "./components/RouterHooks";

function App() {
  return(<>
    <TopNavi></TopNavi> {/* UI에 컴포넌트 추가 */}
    <Routes> {/* 라우팅 처리를 위해 Routes 컴포넌트로 감싸기 */}
      <Route path="/" element={<Home />} /> {/* 요청 URL이 /일 때 Home 컴포넌트로 감싸기 */}
      <Route path="/intro" element={<CommonLayout />}> {/* 공통으로 사용할 컴포넌트 */}
        <Route index element={<LayoutIndex />}></Route> {/* 자식으로 삽입될 컴포넌트, 자식으로 선언할 때에는 index 키워드 사용 */}
        <Route path="router" element={<RouterHooks />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} /> {/* 정의되지 않은 모든 요청 URL에 대해 렌더링 */}
    </Routes>
  </>);
}
export default App