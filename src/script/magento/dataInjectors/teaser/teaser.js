import { renderProof } from "../../_helpers";

const teaser = (teaser) => {
  const teaserInp = document.querySelector("[name=use_teaser]");
  const teaserBtn = document.querySelector("[name=use_teaser] + label");
  if (teaser) {
    if (
      (teaser.data === true && teaserInp.value === "0") ||
      (teaser.data === false && teaserInp.value === "1")
    ) {
      teaserBtn.click();
    }

    const lpValidatorInfo = renderProof({
      container: teaserInp.parentElement,
      text: teaser.text,
    });
    const skipBtn = lpValidatorInfo.querySelector(".lp-validator-skip");
    skipBtn.addEventListener("click", (e) => {
      e.preventDefault();
      teaserBtn.click();
      lpValidatorInfo.classList.toggle("lp-validator-skipped");
    });
  }
};

export default teaser;
