const clickLpListShortCut = () => {
  const pageURL = location.href;
  const lpBtn = document.querySelector(
    '[data-ui-id^="menu-global4net-landingpage-pages"] a'
  );
  if (pageURL.includes("extendedmenu")) {
    lpBtn.click();
    return false;
  } else {
    return true;
  }
};

export default clickLpListShortCut;
