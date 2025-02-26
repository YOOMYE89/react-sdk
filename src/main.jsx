import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

class MyReactAppSDK {
  constructor() {
    this.root = null;
  }

  init(containerId = "root") {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`❌ Container with id "${containerId}" not found!`);
      return;
    }

    if (!this.root) {
      this.root = ReactDOM.createRoot(container);
    }

    this.root.render(
      <React.StrictMode>
        <App />
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