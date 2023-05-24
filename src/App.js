import { useState } from "react";

import Form from "./components/Form";
import Tree from "./components/Tree";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [rootNode, setRootNode] = useState(null);

  return (
    <main className="container">
      <Form
        setInputValue={setInputValue}
        inputValue={inputValue}
        setRootNode={setRootNode}
      />
      <Tree
        rootNode={rootNode}
        setRootNode={setRootNode}
        inputValue={inputValue}
      />
    </main>
  );
}

export default App;
