const renderProof = ({ inp, value, container, proof, warn, error }) => {
  if (container) {
    const oryginalVal = inp ? inp.value : null;
    console.log(container, oryginalVal);
    const alreadyRenderedProof =
      container.parentElement.querySelector(".lp-validator-info");

    if (alreadyRenderedProof) {
      alreadyRenderedProof.remove();
    }

    container.insertAdjacentHTML(
      "afterend",
      `<div class='lp-validator-info${
        error === true ? " lp-validator-error" : ""
      }${warn === true ? " lp-validator-warn" : ""}${
        oryginalVal === value ? " lp-validator-compatible" : ""
      }'>
          <p class='lp-validator-proof'>${proof}</p>
          <button class="lp-validator-skip">add</button>
        </div>`
    );
    const skipBtn = container.parentElement.querySelector(".lp-validator-skip");
    const proofEl = container.parentElement.querySelector(
      ".lp-validator-proof"
    );
    const parent = proofEl.parentElement;
    proofEl.addEventListener("click", (e) => {
      navigator.clipboard.writeText(e.target.textContent);
      parent.classList.add("lp-validator-copied");
      setTimeout(() => {
        parent.classList.remove("lp-validator-copied");
      }, 1500);
    });
    let isOryginalVal = false;
    skipBtn.addEventListener("click", (e) => {
      e.preventDefault();
      inp.value = isOryginalVal ? value : oryginalVal;
      isOryginalVal = !isOryginalVal;
      parent.classList.toggle("lp-validator-skipped");
    });
  }
};

export default renderProof;
