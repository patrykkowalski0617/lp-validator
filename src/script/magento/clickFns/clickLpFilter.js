const clickLpFilter = () => {
  const filterBtnInLpListView = document.querySelector(
    "[data-action=grid-filter-apply]"
  );

  if (filterBtnInLpListView) {
    setTimeout(() => {
      filterBtnInLpListView.click();
    }, 500);
  }
};

export default clickLpFilter;
