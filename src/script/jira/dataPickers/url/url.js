import { formatUrl } from "../../../_helpers";
import { findData } from "../../_helpers";

const url = (paragraphs) => {
  // const keyText = ["url:", "url :"];
  // const extractData = ({ paragraph }) =>
  //   formatUrl(paragraph.querySelector("a").href);

  // return findData({
  //   paragraphs,
  //   keyText,
  //   extractData,
  // });
  const data = formatUrl(
    document.querySelector(".ak-renderer-document a").href
  );
  const text = document.querySelector(".ak-renderer-document a").innerHTML;
  return { data, text };
};

export default url;
