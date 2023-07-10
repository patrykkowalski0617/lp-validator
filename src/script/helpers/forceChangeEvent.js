const forceChangeEvent = (data) => {
  const e = new Event("change");
  const element =
    typeof data === "string" ? document.querySelector(data) : data;
  element.dispatchEvent(e);
};
export default forceChangeEvent;
