const terms = (proof, p, proofLowerCase) => {
  const data = `<p>${p.innerHTML
    .replace("Tekst do regulaminu:", "")
    .replace("tekst do regulaminu:", "")
    .replace("&nbsp;", " ")
    .trim()}</p>`;

  return { data, proof };
};

export default terms;
