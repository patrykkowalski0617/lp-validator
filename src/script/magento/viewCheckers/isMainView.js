const isMainView = () => {
  const pageURL = location.href;

  return pageURL.includes("extendedmenu") ? true : false;
};

export default isMainView;
