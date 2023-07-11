const termsAndConditionText = (proof, p, pText) => {
  const data = `<p>${p.innerHTML
    .replace("Tekst do regulaminu:", "")
    .replace("tekst do regulaminu:", "")
    .replace("&nbsp;", " ")
    .trim()}</p>`;

  return { data, proof };
};

export default termsAndConditionText;
