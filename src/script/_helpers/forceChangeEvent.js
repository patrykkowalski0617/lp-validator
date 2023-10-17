const forceChangeEvent = (data) => {
  // data - selector or single element
  const e = new Event("change");
  const element =
    typeof data === "string" ? document.querySelector(data) : data;
  element.dispatchEvent(e);
};
export default forceChangeEvent;
