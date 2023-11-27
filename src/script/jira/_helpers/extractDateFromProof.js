const extractDateFromText = ({ text }) => {
  const dateData = text
    .toLowerCase()
    .replace("od:", "")
    .replace("do:", "")
    .trim()
    .split(" ")
    .map((x) => x.replace(/\D/g, ""))
    .filter((y) => y.length);
  const dayTxt = dateData[0];
  const clockTxt = dateData[1];
  const todayDateObj = new Date();
  const dayPart =
    dayTxt && dayTxt.length
      ? dayTxt.length === 4
        ? `${dayTxt}${todayDateObj.getFullYear()}`
        : dayTxt
      : "";
  const clockPart =
    clockTxt && clockTxt.length ? clockTxt.padStart(4, "0") : "";

  const data = clockPart.length ? `${dayPart}T${clockPart}` : dayPart;

  return data;
};

export default extractDateFromText;
