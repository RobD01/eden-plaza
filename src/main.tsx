import "./globals.css";

import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import QueryProvider from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <QueryProvider>
      <App />
    </QueryProvider>
  </HashRouter>
);
