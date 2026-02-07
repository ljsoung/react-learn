import { useState } from "react";
import useStudentStore from "./useStudentStore";
import StudentUnit from "./StudentUnit";

export default function AttendanceApp() {
    const [name, setName] = useState(''); // 이름을 입력할 상태 생성
    // 상태 저장소에서 상태변수와 함수 가져오기
    const {students, count, addStudent} = useStudentStore();
    return(<>
        <h2>출결 관리App</h2>
        <p>총학생 수 : {count}</p> {/*총 학생 수 출력 */}
        <input type="text" placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)}/> {/* 학생 이름 입력 상자 */}
        <button onClick={() => { {/*학생 추가 버튼*/}
            if (name.trim()){
                addStudent(name);
                setName('');
            }
        }}>추가</button> 
        <ol>
            {/*students 배열 크기만큼 StudentUnit 컴포넌트 렌더링*/}
            {students.map((student) => (
                <StudentUnit key={student.id} {...student} />
            ))}
        </ol>
    </>);
}