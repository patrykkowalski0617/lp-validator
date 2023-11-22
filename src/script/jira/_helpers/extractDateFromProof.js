const extractDateFromText = ({ text }) => {
  const date = text
    .toLowerCase()
    .replace("od:")
    .replace("do:")
    .split(" ")
    .filter((a) => !a.includes(":"))
    .map((x) => x.replace(/\D/g, ""))
    .filter((y) => Number(y))
    .join("");

  const data = date && date.length < 5 ? date + date.getFullYear() : date;

  return data;
};

export default extractDateFromText;
