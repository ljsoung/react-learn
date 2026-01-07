import { Route, Routes } from "react-router-dom"; // 라우팅을 처리할 컴포넌트 임포트
import TopNavi from "./components/TopNavi";
import LifeCycle from "./components/Lifecycle";
import LocalJsonFetcher from "./components/LocalJsonFetcher";
import ExternalApiFetcher from "./components/ExternalApiFetcher";

function App() {
  return (<>
    <TopNavi></TopNavi> {/* 내비게이션 역할의 컴포넌트 */}
    <Routes>
      <Route path="/" element={<LifeCycle />} />
      <Route path="/local" element={<LocalJsonFetcher />}></Route>
      <Route path="/external" element={<ExternalApiFetcher />}></Route>
    </Routes>
  </>)
}
export default App;