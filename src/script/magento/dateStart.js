import { fillInput } from "./helpersMagento";

const dateStart = (dateStart, teaser) => {
  if (dateStart) {
    const dateStartInp = document.querySelector("[name=date_from]");
    const dateStr = {
      day: dateStart.data.substring(0, 2),
      month: dateStart.data.substring(2, 4),
      year: dateStart.data.substring(4),
    };
    const date = new Date();
    const taskStartDate = `${dateStr.day}/${dateStr.month}/${dateStr.year} 00:00`;
    const todayDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} 00:00`;
    const value = teaser.data === true ? taskStartDate : todayDate;
    const startProof =
      teaser.data === true
        ? dateStart.proof
        : `Data dzisiejsza ponieważ: "${teaser.proof}"`;
    fillInput({
      proof: startProof,
      value,
      inpSelector: "[name=date_from]",
    });
  }
};

export default dateStart;
