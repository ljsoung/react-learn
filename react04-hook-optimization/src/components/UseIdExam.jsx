import { useEffect, useId } from "react"

// 컴포넌트 정의, 3개의 프롭스 받음
const InputField = ({ label, name, autoFocus = false}) => {
    const id = useId(); // useId로 고유한 아이디 생성

    useEffect(() => { // autoFocus가 true인 경우 입력 상자로 포커스 이동
        if(autoFocus){
            document.getElementById(id).focus();
        }
    }, []);

    return(<> {/* 앞에서 생성한 아이디를 입력 상자에 적용 */}
        <label htmlFor="id">{label}</label>
        <input type="text" id={id} name={name} />
    </>);
};

const MyForm = () => { // 회원 정보 입력 폼으로 구성된 컴포넌트 정의
    const commonId = useId();

    return(
        <div>
            {/* InputField 컴포넌트로 입력 상자 정의 */}
            <InputField label="아이디" name="id" autoFocus /> <br />
            <InputField label="이름" name="name" /> <br />
            성별
            <input type="radio" id={`${commonId}-gender1`} name="gender"/>
            <label htmlFor={`${commonId}-gender1`}>남자</label>
            <input type="radio" id={`${commonId}-gender2`} name="gender" />
            <label htmlFor={`${commonId}-gender2`}>여자</label>
        </div>
    );
};

const UseIdExam = () => {
    return(<>
        <h2>useId() 사용하기</h2>
        <MyForm /> {/*컴포넌트를 UI에 추가 */}
    </>);
};

export default UseIdExam;