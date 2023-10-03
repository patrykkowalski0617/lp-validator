import { dataPicker } from "../_helpers";

const title = (paragraphs) => {
  const keyText = ["tytuł:", "tytuł*:"];
  const findDataFn = ({ proof }) => {
    const start = proof.indexOf(":") + 1;
    return proof.substring(start).trim();
  };
  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default title;
