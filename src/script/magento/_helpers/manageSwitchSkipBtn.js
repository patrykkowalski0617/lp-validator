import { forceChangeEvent } from "../../_helpers";

const manageSwitchSkipBtn = ({
  label,
  proofContainer,
  skipBtn,
  isOn,
  shouldBeOn,
}) => {
  skipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if ((isOn && !shouldBeOn) || (!isOn && shouldBeOn)) {
      label.click();
    }
    proofContainer
      .querySelector(".lp-validator-info")
      .classList.toggle("lp-validator-skipped");
  });
};

export default manageSwitchSkipBtn;
