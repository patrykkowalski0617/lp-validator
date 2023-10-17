import { findData } from "../../_helpers";

const teaser = (paragraphs) => {
  const keyText = ["teaser"];
  const extractData = ({ text }) => {
    const start = text.indexOf(":");
    const data = text.substring(start).includes("tak");
    return data;
  };

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default teaser;
