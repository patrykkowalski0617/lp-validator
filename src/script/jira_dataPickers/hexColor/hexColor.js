import { dataPicker } from "../_helpers";

const hexColor = (paragraphs) => {
  const keyText = ["hex", "kolor"];
  const findDataFn = ({ proof }) => {
    const start = proof.indexOf(":") + 1;
    const _data = proof.substring(start).replaceAll("#", "").trim();
    const data = _data.length === 6 ? _data : "";
    return data;
  };

  return dataPicker({
    paragraphs,
    keyText,
    findDataFn,
  });
};

export default hexColor;
