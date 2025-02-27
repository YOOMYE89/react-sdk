// components/Main.jsx
import React, { useEffect, useState } from "react";
import { AuthViewModel } from "../vm/AuthViewModel"
import SelectionPopup from "./SelectionPopup";
import initialJson from "../assets/json/integration.json"

const Main = ({usage}) => {
  const [showPopup, setShowPopup] = useState(true);
  const { selectedMethod, setInitialData, initialData } = AuthViewModel();

  useEffect(() => {
      // 1. 초기 데이터 설정
      initialJson[usage] && setInitialData(initialJson[usage]);      

  }, [usage]);

  return (
    <div>
      <h1>인증 메인화면</h1>
        {showPopup && 
          <SelectionPopup 
            onClose={() => setShowPopup(false)} 
            moduleList={initialData?.moduleList || []}
            onSelect={(method) => selectedMethod(method)}
          />}
        {/* {selectedMethod && <AuthComponent />} */}
    </div>
  );
};

export default Main;