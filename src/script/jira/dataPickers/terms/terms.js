import { removeCounterFromTxt } from "../../../_helpers";
import { findData } from "../../_helpers";

const terms = (paragraphs) => {
  const keyTextGroups = [
    ["tekst", "regulaminu"],
    ["okres", "oznaczon"],
    ["od ", "do ", "kod", "godz"],
  ];
  const extractData = ({ paragraph }) => {
    const data = `<p>${removeCounterFromTxt(paragraph.innerHTML)
      .replace("Tekst do regulaminu:", "")
      .replace("tekst do regulaminu:", "")
      .replaceAll("&nbsp;", " ")
      .replaceAll("<br/>", " ")
      .replaceAll("<br>", " ")
      .trim()}</p>`;
    return data;
  };

  return findData({
    paragraphs,
    keyTextGroups,
    extractData,
  });
};

export default terms;
