import { /*createContext*/ useState } from "react"; // 전역 상태 관리를 위한 createContext 훅 임포트

// export const ThemeContext = createContext(); // 상태 공유를 위한 컨텍스트 생성

export const ThemeProvider = ({children}) => { // 프로바이더 컴포넌트 정의
    const [isDark, setIsDark] = useState(false); // 테마 상태 저장을 위한 상태
    // 테마의 상태를 반전하기 위한 함수 정의
    const toggleTheme = () => setIsDark(prev => !prev);
    return(<>
        {/* 프로바이더로 하위 모든 컴포넌트 감싸기 */}
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>);
};