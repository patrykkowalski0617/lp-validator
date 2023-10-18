import manageSwitchSkipBtn from "./manageSwitchSkipBtn";
import renderProof from "./renderProof";

const setSwitchValue = ({ labelsSelector, shouldBeOn, text }) => {
  const labels = document.querySelectorAll(labelsSelector);
  labels.forEach((label) => {
    const input = label.querySelector(`${labelsSelector} input`);
    const isOn = input.checked;
    const proofContainer = label.parentElement;

    if ((!isOn && shouldBeOn) || (isOn && !shouldBeOn)) {
      label.click();
    }
    if (shouldBeOn) {
      const skipBtn = renderProof({
        proofContainer,
        proof: text,
      });
      // manage skipBtn
      manageSwitchSkipBtn({
        label,
        proofContainer,
        skipBtn,
        isOn,
        shouldBeOn,
      });
    }
  });
};

export default setSwitchValue;
