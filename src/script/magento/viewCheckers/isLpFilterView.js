const isLpFilterView = () => {
  const searchedLpRow = document.querySelector(".data-row.chill-mark");
  return Boolean(searchedLpRow);
};

export default isLpFilterView;
