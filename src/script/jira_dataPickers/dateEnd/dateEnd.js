import { extractDateFromProof, dataPicker } from "../_helpers";

const dateEnd = (paragraphs) => {
  const keyText = ["data do:"];
  const extractData = ({ proof, keyText }) =>
    extractDateFromProof({ proof, keyText });

  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default dateEnd;
