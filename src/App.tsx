import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./components/Button";

const App = () => (
  <div className="container">
    <div>Name: mf-remote</div>
    <div>Framework: react-19</div>
    <Button label="Click Me 🔥" color="blue" initialCount={5} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);