const mechanic = (proof, code) => {
  //   const proof = taskData.code.proof;

  const XY = code.toLowerCase().includes("za");
  const amount =
    proof.toLowerCase().includes("kwoto") ||
    (proof.toLowerCase().includes("kodem") &&
      !proof.toLowerCase().includes("proc"));
  const proc = proof.toLowerCase().includes("proc");
  const limit = proof.toLowerCase().includes("limi");

  const data = limit
    ? "limit"
    : XY
    ? "XY"
    : amount
    ? "amount"
    : proc
    ? "proc"
    : "";

  return { data, proof };
};

export default mechanic;
