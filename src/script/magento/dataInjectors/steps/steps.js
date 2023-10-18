import { setInputValue } from "../../_helpers";

const steps = (taskSteps) => {
  if (taskSteps) {
    const inputs = Array.from(
      document.querySelectorAll(
        ".input__text.input__step.input_required, [id*=tip_tip_]"
      )
    );
    if (!inputs.length) return;
    const { data, text } = taskSteps;
    inputs.forEach((input, i) => {
      setInputValue({
        inputs: [input],
        value: data[i],
        proofContainer: input.parentElement,
        proof: text,
      });
    });
  }
};

export default steps;
