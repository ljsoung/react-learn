import { Route, Routes } from "react-router-dom";
import TopNavi from "./components/TopNavi";
import FireConnect from "./forestores/FireConnect";
import FireCreate from "./forestores/FireCreate";
import FireRead from "./forestores/FireRead";
import FireUpdate from "./forestores/FireUpdate";

function App () {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path="/" element={<FireConnect />} />
      <Route path="/connect" element={<FireConnect />} />
      <Route path="/create" element={<FireCreate />} />
      <Route path="/read" element={<FireRead />} />
      <Route path="/update/:userid" element={<FireUpdate />} />
    </Routes>
  </>);
}

export default App;