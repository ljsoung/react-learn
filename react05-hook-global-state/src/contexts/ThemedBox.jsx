import { useContext } from "react"
import { ThemeContext } from "./ThemeContext" // 앞에서 만든 ThemeContext 임포트

const ThemedBox = () => {
    const {isDark} = useContext(ThemeContext); // ThemeContext에서 isDark만 가져옴
    const boxStyle = { // 박스에 적용할 스타일 정의
        padding: '20px',
        marginTop: '10px',
        backgroundColor: isDark ? '#333' : '#eee',
        color: isDark ? '#fff' : "#000",
        textAlign: 'center'
    };

    return(<>
        <div style={boxStyle}> {/* 박스에 스타일 적용 */}
            현재 테마 : {isDark ? '다크모드' : '라이트모드'}
        </div>
    </>);
}

export default ThemedBox;