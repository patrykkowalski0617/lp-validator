import { setInputValue } from "../../_helpers";

const url = (taskUrl) => {
  if (taskUrl) {
    const inputs = Array.from(document.querySelectorAll("[name=url]"));
    if (!inputs.length) return;
    const { data, text } = taskUrl;

    setInputValue({
      inputs: inputs,
      value: data,
      proofContainer: inputs[0].parentElement.parentElement,
      proof: text,
    });
  }
};

export default url;
