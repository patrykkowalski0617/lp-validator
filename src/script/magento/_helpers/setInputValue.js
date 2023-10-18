import { renderProof, manageSkipBtn } from ".";
import { forceChangeEvent } from "../../_helpers";

const setInputValue = ({ inputs, value, proofContainer, proof }) => {
  // set values
  if (!value) return;
  const oryginalValues = [];
  inputs.forEach((input) => {
    const oryginalValue = input.value;
    oryginalValues.push(oryginalValue);
    input.value = value;
    forceChangeEvent(input);
  });

  // redner proof
  const skipBtn = renderProof({ proofContainer, proof });

  // manage skipBtn
  manageSkipBtn({ inputs, value, proofContainer, skipBtn, oryginalValues });
};

export default setInputValue;
