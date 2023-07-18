import { extractDateFromPText } from "./helpersJira";

const dateStart = (proof, pText) => {
  const data = extractDateFromPText(pText, "data od");

  return { data, proof };
};

export default dateStart;
