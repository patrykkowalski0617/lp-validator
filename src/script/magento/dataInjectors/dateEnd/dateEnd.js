import { formatDateTo, setInputValue } from "../../_helpers";

const dateEnd = (taskDateEnd) => {
  if (taskDateEnd) {
    const inputs = Array.from(document.querySelectorAll("[name=date_to]"));
    if (!inputs.length) return;
    const { data, text } = taskDateEnd;

    const value = formatDateTo.slashFormat({
      dateTxt: data,
      defaultClockTime: "23:59",
    });

    setInputValue({
      inputs: inputs,
      value,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default dateEnd;
