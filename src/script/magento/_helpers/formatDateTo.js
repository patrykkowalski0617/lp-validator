const formatDateTo = {
  slashFormat: ({ dateTxt, defaultClockTime = "00:00" }) => {
    const dayPart = dateTxt.split("T")[0];
    const clockPart = dateTxt.split("T")[1];

    const day = dayPart.substring(0, 2);
    const month = dayPart.substring(2, 4);
    const year = dayPart.substring(4, 8);
    const hours = clockPart
      ? clockPart.substring(0, 2)
      : defaultClockTime.split(":")[0];
    const minutes = clockPart
      ? clockPart.substring(2, 4)
      : defaultClockTime.split(":")[1];

    const newValue = `${day}/${month}/${year} ${hours}:${minutes}`;

    return newValue;
  },
};
export default formatDateTo;
