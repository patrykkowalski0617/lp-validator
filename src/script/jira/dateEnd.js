import { extractDateFromProof } from "./helpersJira";

const dateEnd = (proof, proofLowerCase) => {
  const data = extractDateFromProof(proofLowerCase, "data do");

  return { data, proof };
};

export default dateEnd;
