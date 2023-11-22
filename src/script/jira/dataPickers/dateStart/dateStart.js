import { extractDateFromText, findData } from "../../_helpers";

const dateStart = (paragraphs) => {
  const keyTextGroups = [["data od:"], ["data od :"]];
  const extractData = ({ text, keyTextGroups }) =>
    extractDateFromText({ text, keyTextGroups });

  return findData({
    paragraphs,
    keyTextGroups,
    extractData,
  });
};

export default dateStart;
