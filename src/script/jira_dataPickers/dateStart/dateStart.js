import { extractDateFromProof, dataPicker } from "../_helpers";

const dateStart = (paragraphs) => {
  const keyText = ["data od:"];
  const findDataFn = ({ proof, keyText }) =>
    extractDateFromProof({ proof, keyText });

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default dateStart;
