import { findData } from "../../_helpers";

const title = (paragraphs) => {
  const keyTextGroups = [
    ["tytuł:"],
    ["tytuł*:"],
    ["tytuł :"],
    ["tytuł akcji : "],
    ["tytuł akcji: "],
  ];
  const extractData = ({ text }) => {
    const start = text.indexOf(":") + 1;
    return text.substring(start).trim();
  };
  return findData({
    paragraphs,
    keyTextGroups,
    extractData,
  });
};

export default title;
