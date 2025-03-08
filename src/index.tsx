import * as React from "react";
import { createRoot } from "react-dom/client";
import { Autocomplete } from "./components";
import "./style.css";

const data = [
  { value: "p1", label: "Product1" },
  { value: "p2", label: "Product2" },
];

const App = () => (
  <>
    <Autocomplete
      mode="server"
      url="https://dummyjson.com/products/search?q="
      inputClass="input-class"
    />
    {/* <Autocomplete mode="client" options={data} /> */}
  </>
);

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
