const url = (proof, p) => {
  let a, warn, error, data;

  if (p.querySelector("a")) {
    a = p.querySelector("a");
  } else {
    a = document.querySelector(".ak-renderer-document a");
    warn = true;
  }

  if (a) {
    data = a.href;
  } else {
    data = null;
    error = true;
  }
  return { data, proof, warn, error };
};

export default url;
