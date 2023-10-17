import { findData } from "../../_helpers";

const hexColor = (paragraphs) => {
  const keyText = ["hex", "kolor"];
  const extractData = ({ text }) => {
    const start = text.indexOf(":") + 1;
    const _data = text.substring(start).replaceAll("#", "").trim();
    const data = _data.length === 6 ? _data : "";
    return data;
  };

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default hexColor;
