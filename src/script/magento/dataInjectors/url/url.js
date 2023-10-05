import { fillInput } from "../../_helpers";

const url = (url) => {
  if (url) {
    fillInput({
      proof: url.proof,
      value: url.data,
      inpSelector: "[name=url]",
      renderEl: document.querySelector("[name=url]").parentElement,
    });
  }
};

export default url;
