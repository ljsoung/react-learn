/* eslint-disable react-hooks/set-state-in-effect */
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { firestore } from "../firestoreConfig";

const FireUpdate = () => {
    const params = useParams(); // react-router-dom에서 제공하는 훅 임포트
    const navigate = useNavigate();

    // 아이디, 비밀번호, 이름 입력 상자의 값 변경을 위한 상태
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const memberEdit = async (p_collection) => {
        await setDoc(doc(firestore, p_collection, params.userid), {
            id,
            pass,
            name,
            regdate: new Date().toISOString().slice(0, 10),
        });
    alert("수정 성공");
    navigate('/read'); // 수정이 완료되면 목록으로 자동 이동
    }

    const getMember = async (userid) => { // 회원 정보를 읽어오는 함수 정의
        const docRef = doc(firestore, "members", userid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("문서:", docSnap.data());
            let callData = docSnap.data();
            setId(callData.id);
            setPass(callData.pass);
            setName(callData.name);
        } else{
            console.log("문서가 없습니다.");
        }
    }

    useEffect(() => { // 파라미터로 전달받은 아이디로 회원정보를 한 번만 읽어옴
        getMember(params.userid);
    }, []);

    return (<>
        <h2>Firestore - 수정하기</h2>
        <form onSubmit={(event) => {
            event.preventDefault();
            let collection = event.target.collection.value;
            memberEdit(collection); // submit 이벤트 발생 시 수정을 위한 함수 호출
        }}>
            <table border='1'>
                <tbody>
                    <tr>
                        <td>컬렉션</td> {/* 컬렉션과 아이디는 읽기 전용으로 설정 */}
                        <td><input type="text" name="collection" value="members" readOnly/></td>
                    </tr>
                    <tr>
                        <td>아이디(변경불가)</td>
                        <td><input type="text" name="id" value={id} readOnly/></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" name="pass" value={pass} onChange={(event)=>{setPass(event.target.value);}}/></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name" value={name} onChange={(event) => {setName(event.target.value);}}/></td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">수정</button>
        </form>
    </>);
}

export default FireUpdate;