import { setInputValue } from "../../_helpers";

const dateEnd = (taskDateEnd) => {
  if (taskDateEnd) {
    const inputs = Array.from(document.querySelectorAll("[name=date_to]"));
    const { data, text } = taskDateEnd;

    const value = `${data.substring(0, 2)}/${data.substring(
      2,
      4
    )}/${data.substring(4)} 23:59`;

    setInputValue({
      inputs: inputs,
      value,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default dateEnd;
