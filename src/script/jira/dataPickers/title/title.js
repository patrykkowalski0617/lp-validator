import { findData } from "../../_helpers";

const title = (paragraphs) => {
  const keyText = ["tytuł:", "tytuł*:"];
  const extractData = ({ text }) => {
    const start = text.indexOf(":") + 1;
    return text.substring(start).trim();
  };
  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default title;
