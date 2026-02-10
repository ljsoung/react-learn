import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { firestore } from "../firestoreConfig";
import { NavLink } from "react-router-dom";

const FireRead = () => {
    const [showData, setShowData] = useState([]); // 회원목록 저장을 위한 상태
    const [isRender, setIsRender] = useState(true); // 리렌더링을 위한 상태

    const getCollection = async () => {
        let trArray = [];
        // members 컬렉션에서 출력할 목록 가져오기
        const querySnapshot = await getDocs(collection(firestore, "members"));
        querySnapshot.forEach((row) => { // 문서 개수만큼 반복
            let memberInfo = row.data();
            trArray.push(
                <tr key={row.id}> {/* unique한 key porp 지정 */}
                    <td>{row.id}</td>
                    <td>{memberInfo.pass}</td>
                    <td>{memberInfo.name}</td>
                    <td>{memberInfo.regdate}</td>
                    <td>
                        <NavLink to={"/update/"+row.id}>[수정]</NavLink>&nbsp; {/* 수정 버튼 */}
                        <NavLink onClick={async () => { // deleteDoc() 함수로 문서 삭제
                            if(confirm('삭제할까요?')){
                                await deleteDoc(doc(firestore, "members", row.id));
                                alert("삭제 성공");
                                setIsRender(!isRender);
                            }
                        }}>[삭제]</NavLink>
                    </td>
                </tr>
            );
        });
        setShowData(trArray); // forEach()로 구성한 목록을 출력하기 위해 리렌더링
    };
    
    useEffect(() => { // 렌더링 완료 후 getCollection() 함수 실행
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getCollection();
    }, [isRender]);

    return(<>
        <h2>Firestore - 목록</h2>
        <table border='1'>
            <thead>
                <tr className="text-center">
                    <th>아이디</th><th>비밀번호</th><th>이름</th>
                    <th>가입일</th><th></th>
                </tr>
            </thead>
            <tbody>
                {showData} {/* 회원목록 삽입 */}
            </tbody>
        </table>
    </>);
}

export default FireRead;