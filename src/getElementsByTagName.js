// from: https://eloquentjavascript.net/14_dom.html#i_VSftnyRTsV
export default function byTagName(node, tagName) {
  // 1. if current node has the tagName, keep it
  // 2. and then iterate recursivelly that node's children
  // (if it has children and they are node types)

  const nodesByTagList = [];

  if (node.nodeName === tagName.toUpperCase()) {
    nodesByTagList.push(node);
  }

  if (node.hasChildNodes()) {
    const childNodesArray = Array.from(node.children);
    const childrenByTagName = childNodesArray.reduce(
      (allNodesResult, currentNode) => {
        if (currentNode.nodeType === Node.ELEMENT_NODE) {
          return allNodesResult.concat(byTagName(currentNode, tagName));
        }
        return allNodesResult;
      },
      []
    );

    nodesByTagList.push(...childrenByTagName);
  }

  return nodesByTagList;
}
