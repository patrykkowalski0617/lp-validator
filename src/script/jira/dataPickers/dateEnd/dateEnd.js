import { extractDateFromText, findData } from "../../_helpers";

const dateEnd = (paragraphs) => {
  const keyText = ["data do:", "data do :"];
  const extractData = ({ text, keyText }) =>
    extractDateFromText({ text, keyText });

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default dateEnd;
