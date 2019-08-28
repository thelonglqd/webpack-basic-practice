export const swapText = (node1, node2) => {
  let tmp = node1.innerHTML;
  node1.innerHTML = node2.innerHTML;
  node2.innerHTML = tmp;
};
