const swapBackgroundColor = (node1, node2) => {
  const node1BgColor = window
    .getComputedStyle(node1)
    .getPropertyValue("background-color");
  const node2BgColor = window
    .getComputedStyle(node2)
    .getPropertyValue("background-color");

  node1.style.setProperty("background-color", node2BgColor);
  node2.style.setProperty("background-color", node1BgColor);
};

const swapText = (node1, node2) => {
  let tmp = node1.innerHTML;
  node1.innerHTML = node2.innerHTML;
  node2.innerHTML = tmp;
};

const switchTextButton = document.querySelector("#switch-text-btn");
const switchColorButton = document.querySelector("#switch-color-btn");

switchTextButton.addEventListener("click", () => {
  swapText(
    document.querySelector("#col1-text"),
    document.querySelector("#col2-text")
  );
});

switchColorButton.addEventListener("click", () => {
  swapBackgroundColor(
    document.querySelector("#column1"),
    document.querySelector("#column2")
  );
});
