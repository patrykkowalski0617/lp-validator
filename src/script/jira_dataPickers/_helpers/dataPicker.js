import { findParagraphThatIncludes } from ".";

const dataPicker = ({ paragraphs, keyText, findDataFn }) => {
  const paragraph = findParagraphThatIncludes(keyText).in(paragraphs);

  if (!paragraph) return;
  const proof = paragraph.textContent;
  const data = findDataFn({ paragraph, proof, keyText });

  return { data, proof };
};

export default dataPicker;
