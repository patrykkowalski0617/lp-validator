import { setInputValue } from "../../_helpers";

const headersDates = ({ dateSource, actionType, numOfDays, inputSelector }) => {
  if (dateSource) {
    const inputs = Array.from(document.querySelectorAll(inputSelector));
    const { data, text } = dateSource;

    const h24 = 24 * 60 * 60 * 1000;
    const sourceDay = data.substring(0, 2);
    const sourceMonth = data.substring(2, 4);
    const sourceYear = data.substring(4);
    const sourceDate = new Date(
      `${sourceYear}-${sourceMonth}-${sourceDay}T00:00`
    ).getTime();
    const newDate =
      actionType === "+"
        ? new Date(sourceDate + h24 * numOfDays)
        : new Date(sourceDate - h24 * numOfDays);
    const yyyy = String(newDate.getFullYear());
    const mm = String(newDate.getMonth() + 1).padStart(2, "0");
    const dd = String(newDate.getDate()).padStart(2, "0");
    const value = `${yyyy}-${mm}-${dd}T00:00`;

    setInputValue({
      inputs: inputs,
      value,
      proofContainer: inputs[0].parentElement,
      proof: text,
    });
  }
};

export default headersDates;
