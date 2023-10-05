import { dataFinder_ParagraphThatIncludes } from "./";

const dataPicker = ({ paragraphs, keyText, extractData }) => {
  const paragraph = dataFinder_ParagraphThatIncludes(keyText).in(paragraphs);

  if (!paragraph) return;
  const proof = paragraph.textContent;
  const data = extractData({ paragraph, proof, keyText });

  return { data, proof };
};

export default dataPicker;
