import { createRoot } from "react-dom/client";

const rootDOMnode = document.getElementById("root");
const reactRoot = createRoot(rootDOMnode);

reactRoot.render(  <div><h1>Hola mundo</h1></div>);
