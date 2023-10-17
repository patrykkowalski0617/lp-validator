import { findData } from "../../_helpers";

const terms = (paragraphs) => {
  const keyText = ["oznaczon"];
  const extractData = ({ paragraph }) => {
    const data = `<p>${paragraph.innerHTML
      .replace("Tekst do regulaminu:", "")
      .replace("tekst do regulaminu:", "")
      .replace("&nbsp;", " ")
      .replace("<br/>", " ")
      .replace("<br>", " ")
      .trim()}</p>`;
    return data;
  };

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default terms;
