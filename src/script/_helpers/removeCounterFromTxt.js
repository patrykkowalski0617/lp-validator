const removeCounterFromTxt = (txt) => {
  const clearTxt = Number(txt.split(".")[0])
    ? txt.split(".").slice(1).join(".")
    : txt;

  return clearTxt;
};

export default removeCounterFromTxt;
