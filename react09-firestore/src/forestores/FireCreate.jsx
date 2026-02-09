// 파이어스토어 및 라우터 사용을 위한 함수 임포트
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { firestore } from "../firestoreConfig";

const FireCreate = () => {
    const navigate = useNavigate(); // 화면 이동을 위한 라우터 훅 선언

    // 회원 정보 입력을 위한 함수
    const memberWrite = async (p_collection, p_id, p_pass, p_name) => {
        await setDoc(doc(firestore, p_collection, p_id), {
            id: p_id,
            pass: p_pass,
            name: p_name,
            // 날짜를 0000-00-00 형식으로 지정해서 입력
            regdate: new Date().toISOString().slice(0, 10),
        });
    alert('입력 성공');
    navigate('/read'); // 입력 완료 후 목록으로 이동
    };

    return (<>
        <h2>FireStore - 입력하기</h2>
        <form onSubmit={(event) => { // 폼이 제출(submit)될 때 실행되는 이벤트 핸들러야.
            event.preventDefault(); // 페이지 새로고침 방지
            // target 속성으로 폼값 읽어오기
            let collection = event.target.collection.value;
            let id = event.target.id.value;
            let pass = event.target.pass.value;
            let name = event.target.name.value;

            if(id===''){alert('아이디를 입력하세요'); return;} // 빈 값 검증
            if(pass===''){alert('비밀번호를 입력하세요'); return;}
            if(name===''){alert('이름를 입력하세요'); return;}

            memberWrite(collection, id, pass, name);
            event.target.id.value = '';
            event.target.pass.value = '';
            event.target.name.value = '';
        }}>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>컬렉션</td>
                        {/* 컬렉션명은 읽기 전용으로 설정 */}
                        <td><input type="text" name="collection" value="members" readOnly/></td>
                    </tr>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="id" /></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" name="pass" /></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name" /></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">입력</button>
        </form>
    </>);
}

export default FireCreate;
