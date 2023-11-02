import { setInputValue } from "../../_helpers";

const hexColor = (taskHexColor) => {
  if (taskHexColor.length) {
    const inputs = Array.from(
      document.querySelectorAll(
        `.module__banner_hero .input__color__text,
           .module__banner_hero .input__color`
      )
    );
    if (!inputs.length) return;
    const { data, text } = taskHexColor;

    setInputValue({
      inputs,
      value: `#${data}`,
      proofContainer: inputs[0].parentElement.parentElement,
      proof: text,
    });
  }
};

export default hexColor;
