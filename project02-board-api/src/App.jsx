import { Route, Routes } from "react-router-dom";
import NotFound from "./components/common/NotFound";
import List from "./components/board/List";
import Write from "./components/board/Write";
import View from "./components/board/View";
import Edit from "./components/board/Edit";

function App() {
    return(<>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/list" element={<List />} />
            <Route path="/write" element={<Write />} />
            <Route path="/view">
                <Route path=":idx" element={<View />} />
            </Route>
            <Route path="/edit">
                <Route path=":idx" element={<Edit />} />
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>)
}

export default App;