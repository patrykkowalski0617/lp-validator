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
      }
    }
    return string;
  },
  parse: (data) => {
    const object = {};
    const dataLvl1 = data.split("||0||").filter((el) => el.length);
    dataLvl1.forEach((el, i) => {
      if (!(i % 2)) {
        object[el.split("||1||")[0]] = {};
      }
      const keyLvl1 = el.split("||1||")[0];
      const keyLvl2 = el.split("||1||")[1].split("||2||")[0];
      const valLvl2 = el.split("||1||")[1].split("||2||")[1];
      object[keyLvl1][keyLvl2] = valLvl2;
    });
    return object;
  },
};

export default customJSON;
