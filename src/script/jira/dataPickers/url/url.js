import { formatUrl } from "../../../_helpers";
import { dataPicker } from "../../_helpers";

const url = (paragraphs) => {
  const keyText = ["url:"];
  const extractData = ({ paragraph }) =>
    formatUrl(paragraph.querySelector("a").href);

  return dataPicker({
    paragraphs,
    keyText,
    extractData,
  });
};

export default url;
