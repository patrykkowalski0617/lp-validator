const steps_findParagraph = (taskContentContainers) => {
  const htmlWithSteps = Array.from(taskContentContainers).find(
    (taskDataContainer) => {
      const textContent = taskDataContainer.textContent;

      const lengthCondition = (textContent) => {
        const length = textContent.length;
        const minStepsLength = 50;
        const maxStepsLength = 2000;
        return length < maxStepsLength && length > minStepsLength;
      };
      const numOfListItemCondition = () => {
        const maxNumOfListItem = 3;
        const nodeName = taskDataContainer.nodeName.toUpperCase();
        const liElements = Array.from(taskDataContainer.querySelectorAll("li"));
        const isListNode = nodeName === "UL" || nodeName === "OL";
        return (
          (isListNode && liElements.length <= maxNumOfListItem) ||
          nodeName === "P"
        );
      };
      const keyWordsCondition = (textContent) => {
        const keyTextGroups = [
          ["wybier", "dokończ"],
          ["dodaj", "dokończ"],
          ["dodaj", "produkt", "rabat"],
          ["przyjdź", "wybier"],
          ["zakup", "odbierz"],
        ];
        const txt = textContent.toLowerCase();
        const isTxtInludesKeyWordsGroup = (keyWordsGroup) =>
          keyWordsGroup.every((currentValue) => txt.includes(currentValue));
        const isTxtInludesOneOfKeyWordsGroup = (keyTextGroups) =>
          keyTextGroups.some(isTxtInludesKeyWordsGroup);

        return isTxtInludesOneOfKeyWordsGroup(keyTextGroups);
      };
      return (
        lengthCondition(textContent) &&
        numOfListItemCondition() &&
        keyWordsCondition(textContent)
      );
    }
  );
  return htmlWithSteps;
};

export default steps_findParagraph;
