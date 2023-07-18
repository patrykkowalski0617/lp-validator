const extractDateFromPText = (pText, includes) => {
  const date = pText
    .substring(pText.indexOf(includes))
    .split(" ")
    .filter((a) => !a.includes(":"))
    .map((x) => x.replace(/\D/g, ""))
    .filter((y) => Number(y))
    .join("");
  const data = date.length < 5 ? date + date.getFullYear() : date;
  return data;
};

export default extractDateFromPText;
