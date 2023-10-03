const findParagraphThatIncludes = (keyText) => ({
  in: (paragraphs) => {
    console.log("paragraphs", paragraphs);
    return Array.from(paragraphs).find((paragraph) =>
      keyText.some((txt) => paragraph.textContent.toLowerCase().includes(txt))
    );
  },
});

export default findParagraphThatIncludes;
