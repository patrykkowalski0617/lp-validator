import { extractDateFromProof, dataPicker } from "../../_helpers";

const dateStart = (paragraphs) => {
  const keyText = ["data od:"];
  const extractData = ({ proof, keyText }) =>
    extractDateFromProof({ proof, keyText });

  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default dateStart;
