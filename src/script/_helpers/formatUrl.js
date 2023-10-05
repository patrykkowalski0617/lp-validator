const formatUrl = (value) => {
  if (value) {
    if (value.includes("/") || value.includes(".")) {
      const _a = value.lastIndexOf("/");
      const _b = value.lastIndexOf(".");
      const a = _a === -1 ? 0 : _a + 1;
      const b = _b < a ? value.length : _b;
      const newValue = value.substring(a, b);
      return newValue;
    }
  }
};

export default formatUrl;
