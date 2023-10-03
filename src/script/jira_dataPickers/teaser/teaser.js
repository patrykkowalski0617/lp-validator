import { dataPicker } from "../_helpers";

const teaser = (paragraphs) => {
  const keyText = ["teaser"];
  const findDataFn = ({ proof }) => {
    const start = proof.indexOf(":");
    const data = proof.substring(start).includes("tak");
    return data;
  };

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default teaser;
