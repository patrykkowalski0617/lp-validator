import { fillGenerator } from "./_helpers";
import {
  clickLpFilter,
  clickLpListShortCut,
  clickSearchedLp,
} from "./clickFns";

const magento = (magentoBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      clickLpFilter();
      clickLpListShortCut();
      clickSearchedLp();
      fillGenerator(magentoBody);
    }
  });
};

export default magento;
