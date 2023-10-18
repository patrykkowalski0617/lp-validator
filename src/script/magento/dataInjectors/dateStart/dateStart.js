import { setInputValue } from "../../_helpers";

const dateStart = (taskDateStart, teaser) => {
  if (taskDateStart) {
    const inputs = Array.from(document.querySelectorAll("[name=date_from]"));
    if (!inputs.length) return;
    const { data, text } = taskDateStart;
    const dateStartInTask = `${data.substring(0, 2)}/${data.substring(
      2,
      4
    )}/${data.substring(4)} 23:59`;
    const dateNow = new Date();
    const todayDate = `${dateNow.getDate()}/${
      dateNow.getMonth() + 1
    }/${dateNow.getFullYear()} 00:00`;

    const value = teaser.data ? dateStartInTask : todayDate;
    const proof = teaser.data
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
