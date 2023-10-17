import steps_findParagraph from "./steps_findParagraph";

const steps_findData = (taskContentContainers) => {
  const stepsEl = steps_findParagraph(taskContentContainers);
  if (!stepsEl) return;
  const liElements = Array.from(stepsEl.querySelectorAll("li"));
  const text = stepsEl.textContent;
  const data = liElements.length
    ? liElements.map((el) => el.textContent)
    : text
        .replace(/(\r\n|\n|\r)/gm, "")
        .replace(/\s+/g, " ")
        .split(/[0-9]*\. /)
        .filter((step) => step.length > 20)
        .map((step) => step.trim());
  return { data, text };
};

export default steps_findData;
