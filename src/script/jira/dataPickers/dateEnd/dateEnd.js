import { extractDateFromText, findData } from "../../_helpers";

const dateEnd = (paragraphs) => {
  const keyTextGroups = [["data do:"], ["data do :"]];
  const extractData = ({ text, keyTextGroups }) =>
    extractDateFromText({ text, keyTextGroups });

  return findData({
    paragraphs,
    keyTextGroups,
    extractData,
  });
};

export default dateEnd;
