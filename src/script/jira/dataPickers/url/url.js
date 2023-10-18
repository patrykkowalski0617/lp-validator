import { formatUrl } from "../../../_helpers";
import { findData } from "../../_helpers";

const url = (paragraphs) => {
  const keyText = ["url:", "url :"];
  const extractData = ({ paragraph }) =>
    formatUrl(paragraph.querySelector("a").href);

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default url;
