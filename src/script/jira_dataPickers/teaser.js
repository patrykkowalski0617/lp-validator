const teaser = (proof) => {
  const start = proof.indexOf(":");
  const data = proof.substring(start).includes("tak");
  return { data, proof };
};

export default teaser;
