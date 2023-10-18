import { findData } from "../../_helpers";

const mechanic = (paragraphs) => {
  const keyText = ["mechanika**:", "mechanika:", "mechanika :"];
  const extractData = ({ text }) => {
    const XY =
      text.toLowerCase().includes("za") && text.toLowerCase().includes("00");
    const amount =
      text.toLowerCase().includes("kwoto") ||
      (text.toLowerCase().includes("kodem") &&
        !text.toLowerCase().includes("proc"));
    const proc = text.toLowerCase().includes("proc");
    const limit = text.toLowerCase().includes("limi");

    const data = limit
      ? "limit"
      : XY
      ? "XY"
      : amount
      ? "amount"
      : proc
      ? "proc"
      : "";

    return data;
  };

  return findData({
    paragraphs,
    keyText,
    extractData,
  });
};

export default mechanic;
