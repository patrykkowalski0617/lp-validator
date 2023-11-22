import { formatUrl } from "../../../_helpers";
import { findData } from "../../_helpers";

const url = (paragraphs) => {
  // const keyTextGroups = [["url:"], ["url :"]];
  // const extractData = ({ paragraph }) =>
  //   formatUrl(paragraph.querySelector("a").href);

  // return findData({
  //   paragraphs,
  //   keyTextGroups,
  //   extractData,
  // });
  const ancor = document.querySelector(".ak-renderer-document a");
  const data = formatUrl(ancor ? ancor.href : null);
  const text = ancor ? ancor.innerHTML : "";
  return { data, text };
};

export default url;
