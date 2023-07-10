const bodyFlesh = () => {
  document.body.classList.add("lp-validator-body-flesh");
  setTimeout(() => {
    document.body.classList.remove("lp-validator-body-flesh");
  }, 5000);
};

export default bodyFlesh;
