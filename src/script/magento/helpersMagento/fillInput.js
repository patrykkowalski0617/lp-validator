import { forceChangeEvent } from "../../helpers";
import renderProof from "./renderProof";

const fillInput = ({
  proof,
  value,
  inpSelector,
  inpEl,
  renderEl,
  warn,
  error,
}) => {
  const inp = inpEl || document.querySelector(inpSelector);
  if (inp) {
    renderProof({ container: renderEl || inp, proof, warn, error, inp, value });
    inp.value = value;
    forceChangeEvent(inpSelector);
  } else {
    console.warn(`${inpSelector} not found`);
  }
};

export default fillInput;
