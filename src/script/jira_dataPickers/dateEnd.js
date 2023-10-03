import { extractDateFromProof } from "./helpersJira";

const dateEnd = (proof) => {
  const data = extractDateFromProof(proof, "data do");

  return { data, proof };
};

export default dateEnd;
