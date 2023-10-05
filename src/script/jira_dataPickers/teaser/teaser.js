import { dataPicker } from "../_helpers";

const teaser = (paragraphs) => {
  const keyText = ["teaser"];
  const extractData = ({ proof }) => {
    const start = proof.indexOf(":");
    const data = proof.substring(start).includes("tak");
    return data;
  };

  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default teaser;
