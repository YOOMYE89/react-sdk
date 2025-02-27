import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./view/Main";

class MyReactAppSDK {
  constructor() {
    this.root = null;
  }

  init(containerId = "root", usage) {
    const container = document.getElementById(containerId);

    console.log(usage)

    if(!usage) {
      console.error(`❌ "${usage}" is mandatory`);
      return;
    }
      
    if (!container) {
      console.error(`❌ Container with id "${containerId}" not found!`);
      return;
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(container);
    }

    this.root.render(
      <React.StrictMode>
        <Main usage={usage} />
      </React.StrictMode>
    );

    console.log(`✅ React App initialized in #${containerId}`);
  }

  destroy() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
      console.log("❌ React App unmounted");
    }
  }
}

// 전역 객체로 등록하여 외부에서 사용 가능
window.MyReactApp = new MyReactAppSDK();