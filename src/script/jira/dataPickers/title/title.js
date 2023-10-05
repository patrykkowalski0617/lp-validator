import { dataPicker } from "../../_helpers";

const title = (paragraphs) => {
  const keyText = ["tytuł:", "tytuł*:"];
  const extractData = ({ proof }) => {
    const start = proof.indexOf(":") + 1;
    return proof.substring(start).trim();
  };
  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default title;
