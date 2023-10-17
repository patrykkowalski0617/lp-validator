const extractDateFromText = ({ text, keyText }) => {
  const date = text
    .toLowerCase()
    .substring(text.indexOf(keyText))
    .split(" ")
    .filter((a) => !a.includes(":"))
    .map((x) => x.replace(/\D/g, ""))
    .filter((y) => Number(y))
    .join("");
  const data = date.length < 5 ? date + date.getFullYear() : date;

  return data;
};

export default extractDateFromText;
