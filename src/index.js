import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add([faPlus, faTimes]);

ReactDOM.render(<App />, document.getElementById("root"));
