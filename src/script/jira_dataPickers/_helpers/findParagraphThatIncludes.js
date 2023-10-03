const findParagraphThatIncludes = (keyText) => ({
  in: (paragraphs) => {
    return Array.from(paragraphs).find((paragraph) =>
      keyText.some((txt) => {
        return paragraph.textContent.toLowerCase().includes(txt);
      })
    );
  },
});

export default findParagraphThatIncludes;
