import { useState } from "react";
import ArticleList from "./components/article/ArticleList";
import NavList from "./components/navigation/NavList";
import NavView from "./components/navigation/NavView";
import NavWrite from "./components/navigation/NavWrite";
import ArticleWrite from "./components/article/ArticleWrite";
import ArticleView from "./components/article/ArticleView";
import NavEdit from "./components/navigation/NavEdit";
import ArticleEdit from "./components/article/ArticleEdit";

function Header(props){
    return(
        <header>
            <h2>{props.title}</h2>
        </header>
    );
}

function App() {
    const [boardData, setBoardData] = useState([
        {
            no: 1,
            title: "오늘은 리액트 공부하는 날",
            writer: "낙짜쌤",
            date: "2025-01-01",
            contents: "리액트를 뽀개봅시당",
        },
        {
            no: 2,
            title: "어제는 자바스크립트 공부했음!",
            writer: "유겸쌤",
            date: "2025-02-02",
            contents: "자바스크립트를 할 게 너무 많아요",
        },
        {
            no: 3,
            title: "내일은 프로젝트 만들어야징",
            writer: "미르쌤",
            date: "2025-03-03",
            contents: "프로젝트는 뭘 만들어볼까?",
        }
    ]);

    const [mode, setMode] = useState("list"); // 모드 상태 관리(list, view, write)
    const [no, setNo] = useState(null);
    const [nextNo, setNextNo] = useState(4); // 일련번호 no를 생성하기 위한 상태
    let articleComp, navComp, titleVar, selectRow;

    if(mode === "list"){
        titleVar = "게시판-목록";
        navComp = (
            <NavList onChangeMode={() => {
                setMode("write");
            }}></NavList>
        );
        articleComp = (
            <ArticleList boardData={boardData} onChangeMode={(no) => {
                setMode("view");
                setNo(no); // 열람 중인 게시물의 번호 지정
            }}
        ></ArticleList>);
    } else if (mode === "view") {
        // 열람 모드일 때
        titleVar = "게시판-열람";
        navComp =
            <NavView onChangeMode={(pmode) => {
                setMode(pmode);
            }}
        ></NavView>
        for(let i = 0; i < boardData.length; i++){ // 열람을 위한 객체를 찾아 변수에 저장
            if(no === boardData[i].no){
                selectRow = boardData[i];
                break;
            }
        }
        articleComp = <ArticleView selectRow={selectRow}></ArticleView>;
    } else if (mode === "write") {
        titleVar = "게시판-쓰기";
        navComp = (
            <NavWrite onChangeMode={() => {
                setMode("list");
            }}
            ></NavWrite>
        );
        articleComp = <ArticleWrite writeAction={(t, w, c) => {
            // 작성일을 0000-00-00 형식으로 생성
            let nowDate = new Date().toISOString().slice(0, 10);
            // 폼값으로 새로운 객체 생성
            let addBoardData = {
                no: nextNo,
                title: t,
                writer: w,
                contents: c,
                date: nowDate,
            };
            let copyBoardData = [...boardData]; // 상태 boardData로 복사본 생성
            copyBoardData.push(addBoardData); // 복사본 배열에 새로운 객체 추가
            setBoardData(copyBoardData); // 상태 변경
            setNextNo(nextNo + 1); // 일련번호 1 증가
            setMode("list") // 리스트로 화면 전환
        }}></ArticleWrite>
    } else if(mode === 'delele'){
        let newBoardData = []; // 삭제를 위한 빈 배열 생성
        for(let i = 0; i < boardData.length; i++){ // 게시물 개수만큼 반복
            if (no !== boardData[i].no) {
                setBoardData(newBoardData); // 앞에서 만든 배열로 상태 변경
                setMode('list'); // 목록으로 화면 전환
            }
        }
    } else if (mode === 'edit') { // 수정에서 처리할 내용
        titleVar = '게시판-수정'
        navComp = <NavEdit onChangeMode={() => {
            setMode('list'); // 목록으로 전환
        }}
        onBack={() => {
            setMode('view');
        }}
        ></NavEdit>

        for(let i = 0; i < boardData.length; i++){
            if(no === boardData[i].no){
                selectRow = boardData[i];
            }
        }

        articleComp = <ArticleEdit selectRow={selectRow} editAction={(t, w, c) => {
            let editBoardData = {
                no: no,
                title: t,
                writer: w,
                contents: c,
                date: selectRow.date
            };
            let copyBoardData = [...boardData];
            for(let i = 0; i < copyBoardData.length; i++){
                if(copyBoardData[i].no === no){
                    copyBoardData[i] = editBoardData;
                    break;
                }
            }
            setBoardData(copyBoardData);
            setMode('view');
        }}></ArticleEdit>
    }

    return(<>
        <Header title={titleVar}></Header> {/* 헤더 컴포넌트 렌더링 */}
        {/* 분기 처리를 끝낸 컴포넌트를 변수에 담아 렌더링 */}
        {navComp}
        {articleComp}
    </>);
}

export default App;