## store 생성부터 state 초기화 후 시작화면 반영하기

### 1. index.js
```
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// (2) reducer 생성
// dispatch에서 action이 들어오면, action type과 기존 state를 참고해 새로운 state를 만들어주는 역할
function reducer(state, action) {
  
}

// (1) store 생성 -> const store는 전역변수로, 애플리케이션 어디서든지 참조할 수 있게 됨
const store = createStore(reducer);

// (3) Provider로 <App/>을 감싸 프로젝트에 redux 적용
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
```

### 2. App.js

```
작성 예정
```