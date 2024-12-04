import { createRoot } from "react-dom/client";
import App from "./App";

const rootDOMnode = document.getElementById("root");
const reactRoot = createRoot(rootDOMnode);

reactRoot.render(<App />);
