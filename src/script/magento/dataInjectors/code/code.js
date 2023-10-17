import { fillInput } from "../../_helpers";

const code = (code) => {
  if (code) {
    const error = code.data.includes(",");

    fillInput({
      text: code.text,
      value: code.data,
      inpSelector: "[for^=banner_hero_promo_code_] + input",
      error,
    });
  }
};

export default code;
