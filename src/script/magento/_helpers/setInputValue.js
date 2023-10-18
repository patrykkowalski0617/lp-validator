import { renderProof } from ".";
import { forceChangeEvent } from "../../_helpers";
import manageInputSkipBtn from "./manageInputSkipBtn";

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
  manageInputSkipBtn({
    inputs,
    value,
    proofContainer,
    skipBtn,
    oryginalValues,
  });
};

export default setInputValue;
