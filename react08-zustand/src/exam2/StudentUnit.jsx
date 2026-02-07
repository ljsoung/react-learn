import useStudentStore from "./useStudentStore"

const StudentUnit = ({id, name, isHere}) => { // 학생 컴포넌트 정의
    // 삭제와 출석 여부 토글을 위한 함수 가져오기
    const {deleteStudent, toggleAttendance} = useStudentStore();
    let nameStyle = { // 스타일 객체 생성
        textDecoration: isHere ? 'line-through' : 'none',
        color: isHere ? 'gray' : 'black',
        cursor : 'pointer'
    };

    return (
        <div>
            {/* 이름 출력. 클릭 시 출석 상태 토글됨 */}
            <span style={nameStyle} onClick={() => toggleAttendance(id)}>
                {name}
            </span>
            <button onClick={() => { {/* 삭제 버튼 */}
                if (window.confirm('삭제할까요?')){
                    deleteStudent(id);
                }
            }}>삭제</button>
        </div>
    );
};

export default StudentUnit;