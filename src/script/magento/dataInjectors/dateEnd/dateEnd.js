import { fillInput } from "../../_helpers";

const dateEnd = (dateEnd) => {
  if (dateEnd) {
    // const dateEndInp = document.querySelector("[name=date_to]");
    const dateEndObj = {
      day: dateEnd.data.substring(0, 2),
      month: dateEnd.data.substring(2, 4),
      year: dateEnd.data.substring(4),
    };
    const value = `${dateEndObj.day}/${dateEndObj.month}/${dateEndObj.year} 23:59`;

    fillInput({
      proof: dateEnd.proof,
      value,
      inpSelector: "[name=date_to]",
    });
  }
};

export default dateEnd;
