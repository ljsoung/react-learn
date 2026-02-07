import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./todoSlice";

const TodoApp = () => {
    const [input, setInput] = useState('');
    const todos = useSelector(nowState => nowState.todos); // todos 배열 얻어오기
    const dispatch = useDispatch();

    const handleAdd = () => { // 할 일 추가를 위한 함수 정의
        if(input.trim()){
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return(<>
        <h2>할 일 관리</h2>
        {/* onChange 이벤트 핸들러에 변경 함수 연결 */}
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="할 일 입력" />
        <button onClick={handleAdd}>추가</button>
        <ul>
            {todos.map(todoRow => ( // todos 배열에 등록된 할 일을 출력
                <li key={todoRow.id}>
                    <span style={{cursor: 'pointer', textDecoration: todoRow.done ? 'line-through' : 'none',}} onClick={() => dispatch(toggleTodo(todoRow.idx))}>{todoRow.contents}</span>
                    
                {/* 할 일 삭제 */}
                <button onClick={() => dispatch(deleteTodo(todoRow.idx))}>삭제</button>
                </li>
            ))}
        </ul>
    </>);
};

export default TodoApp;