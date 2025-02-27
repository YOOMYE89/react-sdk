import React from "react";

const SelectionPopup = ({ onClose, moduleList, onSelect }) => {
  return (
    <div className="popup">
      <h2>인증 수단 선택</h2>
      <ul>
        {moduleList.map((module) => (
          <li key={module.serviceCode}>
            <button onClick={() => onSelect(module)}>
              {module.descrptions} (순서: {module.order})
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default SelectionPopup;