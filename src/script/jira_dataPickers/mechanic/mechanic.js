import { dataPicker } from "../_helpers";

const mechanic = (paragraphs) => {
  const keyText = ["mechanika**:", "mechanika:"];
  const findDataFn = ({ proof }) => {
    const XY = proof.includes("ZA");
    const amount =
      proof.toLowerCase().includes("kwoto") ||
      (proof.toLowerCase().includes("kodem") &&
        !proof.toLowerCase().includes("proc"));
    const proc = proof.toLowerCase().includes("proc");
    const limit = proof.toLowerCase().includes("limi");

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

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default mechanic;
