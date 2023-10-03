const terms = (proof, p, proofLowerCase) => {
  const data = `<p>${p.innerHTML
    .replace("Tekst do regulaminu:", "")
    .replace("tekst do regulaminu:", "")
    .replace("&nbsp;", " ")
    .replace("<br/>", " ")
    .replace("<br>", " ")
    .trim()}</p>`;

  return { data, proof };
};

export default terms;
