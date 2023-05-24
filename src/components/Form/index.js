import { constructTreeNode } from "../../helpers/";

const Form = ({ setInputValue, inputValue, setRootNode }) => {
  const onChangeHandler = (e) => setInputValue(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const treeNodesValues = inputValue.split(",");
    const treeRootNode = constructTreeNode(treeNodesValues, 0);
    setRootNode(treeRootNode);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" value={inputValue} onChange={onChangeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
