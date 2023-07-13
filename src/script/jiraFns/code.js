const code = (proof) => {
  const take1 = proof
    .split(" ")
    .filter((x) => isNaN(x))
    .filter((x) => {
      let i = 0;
      let character = "";
      let firstCharacter = "";
      let secondCharacter = "";
      while (i <= x.length) {
        character = x.charAt(i);
        if (x.replace(/[^a-z0-9]/gi, "").length === x.length) {
          if (character == character.toUpperCase() && i === 0) {
            firstCharacter = true;
          }
          if (character == character.toUpperCase() && i === 1) {
            secondCharacter = true;
          }
        }
        i++;
      }
      return firstCharacter && secondCharacter;
    })
    .join();
  const data = isNaN(Number(take1)) ? take1 : "";
  return { data, proof };
};

export default code;
