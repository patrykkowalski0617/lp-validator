import { steps_dataFinder } from "./";

const steps_dataPicker = (taskContentContainers) => {
  const stepsEl = steps_dataFinder(taskContentContainers);
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

export default steps_dataPicker;
