import { extractDateFromProof } from "./helpersJira";

const dateStart = (proof, proofLowerCase) => {
  const data = extractDateFromProof(proofLowerCase, "data od");

  return { data, proof };
};

export default dateStart;
