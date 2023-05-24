export const constructTreeNode = (values, index) => {
  if (index >= values.length) return null;
  const node = { value: values[index] };
  node.left = constructTreeNode(values, 2 * index + 1);
  node.right = constructTreeNode(values, 2 * index + 2);
  node.highlight = false;
  return node;
};

export const resetHighlightNodes = (node) => {
  if (node?.value) {
    node.highlight = false;
  }

  if (node?.left) {
    resetHighlightNodes(node?.left);
  }

  if (node?.right) {
    resetHighlightNodes(node?.right);
  }
};

export const updateHighlightNodes = (node, highlighted) => {
  if (highlighted.has(node?.value)) {
    node.highlight = true;
  }

  if (node?.left) {
    updateHighlightNodes(node?.left, highlighted);
  }

  if (node?.right) {
    updateHighlightNodes(node?.right, highlighted);
  }
};

export const findParentsOfNode = (tree, node) => {
  const parents = new Set([node]);
  let index = tree.indexOf(node);

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = tree[parentIndex];
    parents.add(parent);
    index = parentIndex;
  }

  return parents;
};
