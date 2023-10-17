import qKeyActions from "./qKeyActions";

const magento = (magentoBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      qKeyActions(magentoBody);
    }
  });
};

export default magento;
