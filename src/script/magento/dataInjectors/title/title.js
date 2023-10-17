import { fillInput } from "../../_helpers";

const title = (title) => {
  if (title) {
    fillInput({
      text: title.text,
      value: title.data,
      inpSelector: ".admin__field-control [name=name]",
    });
  }
};

export default title;
