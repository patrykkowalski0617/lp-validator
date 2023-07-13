import { forceChangeEvent } from "../../helpers";
import renderProof from "./renderProof";

const fillInput = ({ proof, value, inpSelector, inpEl, warn, error }) => {
  const inp = inpEl ? inpEl : document.querySelector(inpSelector);
  if (inp) {
    renderProof({ container: inp, proof, warn, error, inp, value });
    inp.value = value;
    forceChangeEvent(inpSelector);
  } else {
    console.warn(`${inpSelector} not found`);
  }
};

export default fillInput;
