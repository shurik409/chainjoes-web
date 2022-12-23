import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";


// Vue3 App
import { createApp } from 'vue/dist/vue.esm-bundler';
import TokenSale from './vuesale/components/TokenSale.vue';

// VueX store
import store from "./vuesale/store";
console.log(0);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log(1);
createApp(TokenSale).use(store).mount('#app')