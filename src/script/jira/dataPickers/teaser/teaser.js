import { findData } from "../../_helpers";

const teaser = (paragraphs) => {
  const keyTextGroups = [["teaser"]];
  const extractData = ({ text }) => {
    const start = text.indexOf(":");
    const data = text.substring(start).includes("tak");
    return data;
  };

  return findData({
    paragraphs,
    keyTextGroups,
    extractData,
  });
};

export default teaser;
