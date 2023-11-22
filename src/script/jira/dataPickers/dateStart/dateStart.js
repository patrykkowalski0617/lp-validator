import { extractDateFromText, findData } from "../../_helpers";

const dateStart = (paragraphs) => {
  const keyText = [["data od:"], ["data od :"]];
  const extractData = ({ text, keyText }) =>
    extractDateFromText({ text, keyText });

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default dateStart;
