import { fillInput } from "./helpersMagento";

const url = (url) => {
  if (url) {
    const formatUrl = (value) => {
      if (value) {
        if (value.includes("/") || value.includes(".")) {
          const _a = value.lastIndexOf("/");
          const _b = value.lastIndexOf(".");
          const a = _a === -1 ? 0 : _a + 1;
          const b = _b < a ? value.length : _b;
          const newValue = value.substring(a, b);
          return newValue;
        }
      }
    };
    const data = formatUrl(url.data);

    fillInput({
      proof: url.proof,
      value: data,
      inpSelector: "[name=url]",
      renderEl: document.querySelector("[name=url]").parentElement,
    });

    const filterBtnInLpListView = document.querySelector(
      "[data-action=grid-filter-apply]"
    );

    if (filterBtnInLpListView) {
      setTimeout(() => {
        filterBtnInLpListView.click();
      }, 500);
    }
  }
};

export default url;
