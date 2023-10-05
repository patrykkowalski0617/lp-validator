const clickSearchedLp = () => {
  const searchedLpRow = document.querySelector(".data-row.chill-mark");
  if (searchedLpRow) {
    searchedLpRow.click();
    return false;
  }
};

export default clickSearchedLp;
