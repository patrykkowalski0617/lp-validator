import { customJSON } from "../../_helpers";
import { urlFn } from "../dataInjectors";

const lpListViewAction = () => {
  const filterBtnInLpListView = document.querySelector(
    "[data-action=grid-filter-apply]"
  );
  navigator.clipboard.readText().then((clitextLowerCase) => {
    const taskData = customJSON.parse(clitextLowerCase);
    const { url } = taskData;

    urlFn(url);
  });
  setTimeout(() => {
    filterBtnInLpListView.click();
  }, 500);
};

export default lpListViewAction;
