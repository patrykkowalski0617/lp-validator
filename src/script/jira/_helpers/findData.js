import { findParagraphThatIncludesText } from ".";

const findData = ({ paragraphs, keyText, extractData }) => {
  const paragraph = findParagraphThatIncludesText(keyText).in(paragraphs);
  if (!paragraph) return;
  const text = paragraph.textContent;
  const data = extractData({ paragraph, text, keyText });

  return { data, text };
};

export default findData;
