
const handler = el => {
  el.classList.add("custom-style");
};

function TreeWalking(root, handler) {

  const callTreeWalking = node => [].forEach.call(node, nodeElement => {
    handler(nodeElement);
    TreeWalking(nodeElement.children, handler);
  });

  const isCollection = HTMLCollection.prototype.isPrototypeOf(root);

  if (isCollection) {
    callTreeWalking(root);

  } else {
    handler(root);
    callTreeWalking(root.children);

  }
}

TreeWalking(document.getElementById("root"), handler);
