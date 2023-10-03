import { extractDateFromProof, dataPicker } from "../_helpers";

const dateEnd = (paragraphs) => {
  const keyText = ["data do:"];
  const findDataFn = ({ proof, keyText }) =>
    extractDateFromProof({ proof, keyText });

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default dateEnd;
