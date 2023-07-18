import { extractDateFromPText } from "./helpersJira";

const dateEnd = (proof, pText) => {
  const data = extractDateFromPText(pText, "data do");

  return { data, proof };
};

export default dateEnd;
