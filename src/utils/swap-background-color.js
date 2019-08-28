export const swapBackgroundColor = (node1, node2) => {
  const node1BgColor = window
    .getComputedStyle(node1)
    .getPropertyValue("background-color");
  const node2BgColor = window
    .getComputedStyle(node2)
    .getPropertyValue("background-color");

  node1.style.setProperty("background-color", node2BgColor);
  node2.style.setProperty("background-color", node1BgColor);
};
