import { setInputValue } from "../../_helpers";

const code = (taskCode) => {
  if (taskCode) {
    const inputs = Array.from(
      document.querySelectorAll("[for^=banner_hero_promo_code_] + input")
    );
    if (!inputs.length) return;
    const { data, text } = taskCode;

    setInputValue({
      inputs: inputs,
      value: data,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default code;
