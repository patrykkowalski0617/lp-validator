import { forceChangeEvent } from "../../_helpers";
import renderProof from "./renderProof";

const fillInput = ({
  text,
  value,
  inpSelector,
  inpEl,
  renderEl,
  warn,
  error,
}) => {
  const inp = inpEl || document.querySelector(inpSelector);
  if (inp) {
    renderProof({ container: renderEl || inp, text, warn, error, inp, value });
    inp.value = value;
    forceChangeEvent(inpSelector);
  } else {
    console.warn(`"${inpSelector}" not found`);
  }
};

export default fillInput;
