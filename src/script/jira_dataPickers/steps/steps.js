const steps = (taskContentContainers) => {
  const findSteps = (taskContentContainers) => {
    const htmlWithSteps = Array.from(taskContentContainers).find(
      (taskDataContainer) => {
        const textContent = taskDataContainer.textContent;

        const lengthCondition = (textContent) => {
          const length = textContent.length;
          const minStepsLength = 150;
          const maxStepsLength = 1000;
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

        return (
          lengthCondition(textContent) &&
          numOfListItemCondition(taskDataContainer) &&
          keyWordsCondition(textContent)
        );
      }
    );
    return htmlWithSteps;
  };

  const stepsExtractData = (taskContentContainers) => {
    const stepsEl = findSteps(taskContentContainers);
    if (!stepsEl) return;
    const proof = stepsEl.textContent;
    const data = proof
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/\s+/g, " ")
      .split(/[0-9]*\. /)
      .filter((step) => step.length > 20)
      .map((step) => step.trim());
    return { data, proof };
  };
  return stepsExtractData(taskContentContainers);
};

export default steps;
