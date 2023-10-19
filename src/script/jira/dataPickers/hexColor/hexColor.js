import { findData } from "../../_helpers";

const hexColor = (paragraphs) => {
  const keyText = ["hex", "kolor"];
  const extractData = ({ text }) => {
    const start = text.indexOf(":") + 1;
    const _take1 = text.substring(start).trim();
    const take1 = _take1.length === 6 ? _take1 : "";

    const _take2 = text.slice(-7);
    const take2 =
      (_take2.includes("#") || _take2.slice(0, 1) === " ") &&
      !_take2.includes(":")
        ? _take2
        : "";
    const data = take1.length ? take1 : take2;
    return data.replaceAll("#", "");
  };

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default hexColor;
