import { setInputValue } from "../../_helpers";

const url = (taskUrl) => {
  if (taskUrl) {
    const inputs = Array.from(document.querySelectorAll("[name=url]"));
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
