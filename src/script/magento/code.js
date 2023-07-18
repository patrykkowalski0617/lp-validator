import { fillInput } from "./helpersMagento";

const code = (code) => {
  if (code) {
    const error = code.data.includes(",");

    fillInput({
      proof: code.proof,
      value: code.data,
      inpSelector: "[for^=banner_hero_promo_code_] + input",
      error,
    });
  }
};

export default code;
