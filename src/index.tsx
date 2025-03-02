import * as React from "react";
import { createRoot } from "react-dom/client";
import { Autocomplete } from "./components";

const App = () => (
  <>
    <Autocomplete url="https://dummyjson.com/products/search?q=" />
  </>
);

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
