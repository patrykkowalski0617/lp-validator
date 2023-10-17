import { forceChangeEvent } from "../../_helpers";

const manageSkipBtn = ({
  inputs,
  value,
  proofContainer,
  skipBtn,
  oryginalValues,
}) => {
  skipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputs.forEach((input, i) => {
      const currentValue = input.value;
      const newValue = currentValue === value ? oryginalValues[i] : value;
      input.value = newValue;
      forceChangeEvent(input);
    });
    proofContainer
      .querySelector(".lp-validator-info")
      .classList.toggle("lp-validator-skipped");
  });
};

export default manageSkipBtn;
