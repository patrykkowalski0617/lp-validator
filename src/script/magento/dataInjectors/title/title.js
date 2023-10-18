import { setInputValue } from "../../_helpers";

const title = (taskTitle) => {
  if (taskTitle) {
    const inputs = Array.from(
      document.querySelectorAll(".admin__field-control [name=name]")
    );
    if (!inputs.length) return;
    const { data, text } = taskTitle;

    setInputValue({
      inputs: inputs,
      value: data,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default title;
