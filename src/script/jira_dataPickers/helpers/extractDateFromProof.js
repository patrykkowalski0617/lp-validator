const extractDateFromProof = ({ proof, keyText }) => {
  const date = proof
    .toLowerCase()
    .substring(proof.indexOf(keyText))
    .split(" ")
    .filter((a) => !a.includes(":"))
    .map((x) => x.replace(/\D/g, ""))
    .filter((y) => Number(y))
    .join("");
  const data = date.length < 5 ? date + date.getFullYear() : date;

  return data;
};

export default extractDateFromProof;
