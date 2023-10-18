import renderProof from "./renderProof";

const setSwitchValue = ({ labelsSelector, shouldBeOn, text }) => {
  const labels = document.querySelectorAll(labelsSelector);
  labels.forEach((label) => {
    const input = label.querySelector(`${labelsSelector} input`);
    const isOn = input.checked;
    if ((!isOn && shouldBeOn) || (isOn && !shouldBeOn)) {
      label.click();
    }
    if (shouldBeOn) {
      renderProof({ proofContainer: label.parentElement, proof: text });
    }
  });
};

export default setSwitchValue;
