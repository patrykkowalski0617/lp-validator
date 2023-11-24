const isLoginPageView = () => {
  return Boolean(
    document.querySelector(".login-content .action-login.action-primary")
  );
};

export default isLoginPageView;
