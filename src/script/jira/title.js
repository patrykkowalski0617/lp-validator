const title = (proof) => {
  const start = proof.indexOf(":") + 1;
  const data = proof.substring(start).trim();

  return { data, proof };
};

export default title;
