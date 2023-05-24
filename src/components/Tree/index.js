import {
  resetHighlightNodes,
  updateHighlightNodes,
  findParentsOfNode,
} from "../../helpers";

import "./Tree.css";

const Tree = ({ rootNode, setRootNode, inputValue }) => {
  const onClickHandler = (e) => {
    const newRootNode = { ...rootNode };
    resetHighlightNodes(newRootNode);
    const nodeValue = e.target.innerText;
    const highlightedNodes = findParentsOfNode(
      inputValue.split(","),
      nodeValue
    );
    updateHighlightNodes(newRootNode, highlightedNodes);
    setRootNode(newRootNode);
  };

  const renderTree = (node) => {
    return (
      <>
        <div
          className={
            node?.highlight ? "node-element-highlight" : "node-element"
          }
          onClick={onClickHandler}
        >
          {node?.value}
        </div>
        {node?.left || node?.right ? (
          <>
            <div className="node-bottom-line"></div>
            <div className="node-children">
              {node?.left && (
                <div className="node node-left">{renderTree(node?.left)}</div>
              )}
              {node?.right && (
                <div className="node node-right">{renderTree(node?.right)}</div>
              )}
            </div>
          </>
        ) : null}
      </>
    );
  };

  if (!rootNode) return null;

  return <div className="tree">{renderTree(rootNode)}</div>;
};

export default Tree;
