const hex = (proof) => {
  const start = proof.indexOf(":") + 1;
  const _data = proof.substring(start).replaceAll("#", "").trim();
  const data = _data.length === 6 ? _data : "";
  return { data, proof };
};

export default hex;
