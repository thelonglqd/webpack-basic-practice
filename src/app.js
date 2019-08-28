import { swapBackgroundColor } from "./utils/swap-background-color.js";
import { swapText } from "./utils/swap-text.js";

export const run = () => {
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
};
