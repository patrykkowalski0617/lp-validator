const teaser = (proof) => {
  const start = proof.indexOf(":");
  const data = String(proof.substring(start).includes("tak"));
  return { data, proof };
};

export default teaser;
