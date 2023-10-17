import { setInputValue } from "../../_helpers";

const terms = (taskTerms) => {
  if (taskTerms) {
    const inputs = Array.from(
      document.querySelectorAll("[id*=terms_and_condition_content_]")
    );
    const { data, text } = taskTerms;

    setInputValue({
      inputs: inputs,
      value: data,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default terms;
