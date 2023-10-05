const dataFinder_ParagraphThatIncludes = (keyText) => ({
  in: (paragraphs) => {
    return Array.from(paragraphs).find((paragraph) =>
      keyText.some((txt) => {
        const paragraphContent = paragraph.textContent.toLowerCase();
        return paragraphContent.includes(txt);
      })
    );
  },
});

export default dataFinder_ParagraphThatIncludes;
