import { findParagraphThatIncludes } from ".";

const dataPicker = ({ paragraphs, keyText, findDataFn }) => {
  const paragraph = findParagraphThatIncludes(keyText).in(paragraphs);

  if (!paragraph) return;
  const proof = paragraph.textContent;
  const data = findDataFn({ paragraph, proof, keyText });
  const isError = !proof.toLowerCase().includes(keyText);

  return { data, proof, isError };
};

export default dataPicker;
