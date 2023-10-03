import { fillInput } from "./_helpers";

const title = (title) => {
  if (title) {
    fillInput({
      proof: title.proof,
      value: title.data,
      inpSelector: ".admin__field-control [name=name]",
    });
  }
};

export default title;
