const customJSON = {
  stringify: (data) => {
    let string = "";
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        const keyLvl2 = key;
        const dataLvl2 = data[key];
        for (const key in dataLvl2) {
          const element = dataLvl2[key];

          string += `||0||${keyLvl2}||1||${key}||2||${element}`;
        }
        string += `||BRK-LVL0||`;
      }
    }
    navigator.clipboard.writeText(string);
    return string;
  },
  parse: (data) => {
    const expectedAmountOfKeysInEachObjectOnLevel2 = 4;
    const object = {};

    const dataLvl0 = data.split("||BRK-LVL0||").filter((el) => el.length);
    dataLvl0.forEach((element) => {
      const dataLvl1 = element.split("||0||").filter((el) => el.length);

      dataLvl1.forEach((el, i) => {
        if (!(i % expectedAmountOfKeysInEachObjectOnLevel2)) {
          object[el.split("||1||")[0]] = {};
        }

        const keyLvl1 = el.split("||1||")[0];
        const keyLvl2 = el.split("||1||")[1].split("||2||")[0];
        const valLvl2 = el.split("||1||")[1].split("||2||")[1];
        const correctType = (value) => {
          let _undefined;
          return value === "true"
            ? true
            : value === "false"
            ? false
            : value === "null"
            ? null
            : value === "undefined"
            ? _undefined
            : value;
        };
        object[keyLvl1][keyLvl2] = correctType(valLvl2);
      });
    });
    return object;
  },
};

export default customJSON;
