import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom" // BrowserRouter 임포트

createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* App컴포넌트 감싸기 */}
    <App />
  </BrowserRouter>
)
