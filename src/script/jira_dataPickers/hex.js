const hex = (proof, proofLowerCase) => {
  const start = proof.indexOf(":") + 1;
  const _data = proof.substring(start).replaceAll("#", "").trim();
  const data = _data.length === 6 ? _data : "";
  const warn = proofLowerCase.includes("kolor:") ? true : false;

  return { data, proof, warn };
};

export default hex;
