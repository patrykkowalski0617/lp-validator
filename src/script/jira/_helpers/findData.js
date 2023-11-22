import { findParagraphThatIncludesText } from ".";

const findData = ({ paragraphs, keyTextGroups, extractData }) => {
  const paragraph = findParagraphThatIncludesText(keyTextGroups).in(paragraphs);
  if (!paragraph) return;
  const text = paragraph.textContent;
  const data = extractData({ paragraph, text, keyTextGroups });

  return { data, text };
};

export default findData;
