const findParagraphThatIncludes = (keyText) => ({
  in: (paragraphs) => {
    return Array.from(paragraphs).find((paragraph) =>
      paragraph.textContent.toLowerCase().includes(keyText)
    );
  },
});

export default findParagraphThatIncludes;
