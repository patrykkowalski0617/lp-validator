const steps_dataFinder = (taskContentContainers) => {
  const htmlWithSteps = Array.from(taskContentContainers).find(
    (taskDataContainer) => {
      const textContent = taskDataContainer.textContent;

      const lengthCondition = (textContent) => {
        const length = textContent.length;
        const minStepsLength = 50;
        const maxStepsLength = 2000;
        return length < maxStepsLength && length > minStepsLength;
      };
      const numOfListItemCondition = (taskDataContainer) => {
        const maxNumOfListItem = 3;
        const nodeName = taskDataContainer.nodeName;
        const isListNode = nodeName === "UL" || nodeName === "OL";
        return (
          (isListNode &&
            taskDataContainer.querySelectorAll("li").length <=
              maxNumOfListItem) ||
          nodeName === "P"
        );
      };
      const keyWordsCondition = (textContent) => {
        const keyWordsGroups = [
          ["wybier", "dokończ"],
          ["dodaj", "dokończ"],
          ["przyjdź", "wybier"],
          ["zakup", "odbierz"],
        ];
        const txt = textContent.toLowerCase();
        const isTxtInludesKeyWordsGroup = (keyWordsGroup) =>
          keyWordsGroup.every((currentValue) => txt.includes(currentValue));
        const isTxtInludesOneOfKeyWordsGroup = (keyWordsGroups) =>
          keyWordsGroups.some(isTxtInludesKeyWordsGroup);

        return isTxtInludesOneOfKeyWordsGroup(keyWordsGroups);
      };
      console.log(
        textContent,
        lengthCondition(textContent),
        numOfListItemCondition(taskDataContainer),
        keyWordsCondition(textContent)
      );
      return (
        lengthCondition(textContent) &&
        numOfListItemCondition(taskDataContainer) &&
        keyWordsCondition(textContent)
      );
    }
  );
  return htmlWithSteps;
};

export default steps_dataFinder;
