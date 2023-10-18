const renderProof = ({ proofContainer, proof }) => {
  const alreadyRenderedProof =
    proofContainer.querySelector(".lp-validator-info");
  if (alreadyRenderedProof) return;

  proofContainer.insertAdjacentHTML(
    "beforeend",
    `<div class='lp-validator-info'>
            <p class='lp-validator-text'>${proof}</p>
            <button class="lp-validator-skip">add</button>
          </div>`
  );

  const skipBtn = proofContainer.querySelector(".lp-validator-skip");
  return skipBtn;
};

export default renderProof;
