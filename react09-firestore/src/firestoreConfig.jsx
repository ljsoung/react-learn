import { initializeApp } from "firebase/app"; // 파이어베이스 초기화를 위한 함수 임포트
import { getFirestore } from "firebase/firestore"; // 파이어스토어 사용을 위한 함수 임포트

const firebaseConfig = { // 파이어베이스 SDK 정보
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_autoDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // 파이어스토어 객체 얻어오기 및 익스포트
export { firestore };