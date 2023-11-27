import { formatDateTo, setInputValue } from "../../_helpers";

const dateStart = (taskDateStart, teaser) => {
  if (taskDateStart) {
    const inputs = Array.from(document.querySelectorAll("[name=date_from]"));
    if (!inputs.length) return;
    const { data, text } = taskDateStart;

    const dateStart = formatDateTo.slashFormat({ dateTxt: data });
    const value = teaser && teaser.data ? dateStart : todayDate;
    const proof =
      teaser && teaser.data
        ? text
        : `Data dzisiejsza ponieważ: "${teaser.text}"`;
    setInputValue({
      inputs: inputs,
      value,
      proofContainer: inputs[0].parentElement,
      proof,
    });
  }
};

export default dateStart;
