const isLpListView = () => {
  const filterBtnInLpListView = document.querySelector(
    "[data-action=grid-filter-apply]"
  );
  const searchedLpRow = document.querySelector(".data-row.chill-mark");
  return filterBtnInLpListView && !searchedLpRow;
};

export default isLpListView;
