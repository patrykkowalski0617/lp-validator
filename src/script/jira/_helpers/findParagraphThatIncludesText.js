const findParagraphThatIncludesText = (keyText) => ({
  in: (paragraphs) => {
    const txtThatInludesOneOfKeyWordsGroup = (textContent, keyWordsGroups) => {
      const txt = textContent.toLowerCase();
      const isTxtInludesKeyWordsGroup = (keyWordsGroup) => {
        return keyWordsGroup.every((currentValue) =>
          txt.includes(currentValue)
        );
      };
      const isTxtInludesOneOfKeyWordsGroup = (keyWordsGroups) => {
        return keyWordsGroups.some(isTxtInludesKeyWordsGroup);
      };

      return isTxtInludesOneOfKeyWordsGroup(keyWordsGroups);
    };

    return Array.from(paragraphs).find((paragraph) =>
      txtThatInludesOneOfKeyWordsGroup(paragraph.textContent, keyText)
    );
  },
});

export default findParagraphThatIncludesText;
