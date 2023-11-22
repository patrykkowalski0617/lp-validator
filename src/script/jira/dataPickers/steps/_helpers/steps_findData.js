import steps_findParagraph from "./steps_findParagraph";

const steps_findData = (taskContentContainers) => {
  const stepsEl = steps_findParagraph(taskContentContainers);
  if (!stepsEl) return;
  const liElements = Array.from(stepsEl.querySelectorAll("li"));
  const text = stepsEl.innerHTML;

  const clearTxt = (txt) =>
    txt
      .replaceAll("<br>", " ")
      .replaceAll("<br/>", " ")
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/\s+/g, " ")
      .split(/[\d]+\./)
      .filter((step) => step.length > 20)
      .map((step) => step.trim());

  const data = liElements.length
    ? liElements.map((el) => clearTxt(el.innerHTML))
    : clearTxt(text);
  return { data, text };
};

export default steps_findData;
