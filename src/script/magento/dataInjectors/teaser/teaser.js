import { renderProof } from "../../_helpers";

const teaser = (taskTeaser) => {
  const teaserInp = document.querySelector("[name=use_teaser]");
  const teaserBtn = document.querySelector("[name=use_teaser] + label");
  if (taskTeaser) {
    const { data, text } = taskTeaser;
    if (
      (data === true && teaserInp.value === "0") ||
      (data === false && teaserInp.value === "1")
    ) {
      teaserBtn.click();
    }

    const skipBtn = renderProof({
      proofContainer: teaserInp.parentElement,
      proof: text,
    });
    skipBtn.addEventListener("click", (e) => {
      e.preventDefault();
      teaserBtn.click();
      teaserInp.parentElement
        .querySelector(".lp-validator-info")
        .classList.toggle("lp-validator-skipped");
    });
  }
};

export default teaser;
