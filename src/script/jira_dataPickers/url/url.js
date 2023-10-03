import { dataPicker } from "../_helpers";

const url = (paragraphs) => {
  const keyText = ["url:"];
  const findDataFn = ({ paragraph }) => paragraph.querySelector("a").href;

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default url;
