const title = (proof, p, pText) => {
  const start = proof.indexOf(":") + 1;
  const data = proof.substring(start).trim();

  return { data, proof, warn: true, error: true };
};

export default title;
