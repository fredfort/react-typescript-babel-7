import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App/App.component"

ReactDOM.render(
    <App compiler="TypeScript" framework="React"/>,
    document.getElementById("app")
);