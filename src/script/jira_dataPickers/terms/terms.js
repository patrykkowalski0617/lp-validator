import { dataPicker } from "../_helpers";

const terms = (paragraphs) => {
  const keyText = ["oznaczon"];
  const findDataFn = ({ proof }) => {
    const data = `<p>${proof
      .replace("Tekst do regulaminu:", "")
      .replace("tekst do regulaminu:", "")
      .replace("&nbsp;", " ")
      .replace("<br/>", " ")
      .replace("<br>", " ")
      .trim()}</p>`;
    return data;
  };

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default terms;
