import { dataPicker } from "../../_helpers";

const url = (paragraphs) => {
  const keyText = ["url:"];
  const extractData = ({ paragraph }) => paragraph.querySelector("a").href;

  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default url;
