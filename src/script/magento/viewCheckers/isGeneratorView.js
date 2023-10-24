const isGeneratorView = () => {
  return Boolean(
    document.querySelector("#lpGenerator") ||
      document.querySelector(".page-title").textContent === "Nowy Landing Page"
  );
};

export default isGeneratorView;
