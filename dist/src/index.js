import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { createRoot } from "react-dom/client";
const App = ()=>/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("h1", {
            children: "React Autocomplete Component"
        })
    });
const root = createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ _jsx(React.StrictMode, {
    children: /*#__PURE__*/ _jsx(App, {})
}));
