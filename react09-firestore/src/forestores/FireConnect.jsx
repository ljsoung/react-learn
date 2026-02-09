import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firestoreConfig";

const FireConnect = () => {
    console.log("firestore", firestore);
    
    const addMessage = async () => { // 문서 추가를 위한 함수 선언 (비동기)
        // setDoc() 함수로 새로운 문서 추가
        await setDoc(doc(firestore, "React", "Firebase"),{
            category : "파이어스토어",
            book : "React로 개발자되기",
            Publisher : "골든레빗",
        });
        console.log("입력성공");
    }

    const getMessage = async () => {
        const docRef = doc(firestore, "React", "Firebase"); // 문서의 참조값을 읽어옴
        const docSnap = await getDoc(docRef); // 참조값을 인수로 문서를 읽어옴
        if(docSnap.exists()){
            console.log("문서:", docSnap.data());
        }
        else{
            console.log("문서가 없습니다.");
            
        }
    }

    return(<>
        <h2>Firestore - 연결</h2> {/* 입력과 읽기를 위한 함수 호출 */}
        <input type="button" value='입력Test' onClick={addMessage} />
        <input type="button" value='읽기Test' onClick={getMessage} />
    </>);
}

export default FireConnect;