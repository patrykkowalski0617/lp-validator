const url = (proof, p, proofLowerCase) => {
  let error, data;
  if (proofLowerCase.includes("url:")) {
    data = p.querySelector("a").href;
  } else if (p.querySelector("a")) {
    data = p.querySelector("a").href;
    error = true;
  }

  return { data, proof, error };
};

export default url;
