import { setInputValue } from "../../_helpers";

const hexColor = (taskHexColor) => {
  if (taskHexColor) {
    const inputs = Array.from(
      document.querySelectorAll(
        `.module__banner_hero .input__color__text,
           .module__banner_hero .input__color`
      )
    );
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
