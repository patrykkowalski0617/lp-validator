import { fillGenerator } from "./_helpers";
import { clickLpListShortCut, clickSearchedLp } from "./clickFns";

const magento = (magentoBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      clickLpListShortCut();
      clickSearchedLp();
      fillGenerator(magentoBody);
    }
  });
};

export default magento;
