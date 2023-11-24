import {
  isGeneratorView,
  isLpListView,
  isLpFilterView,
  isMainView,
  isLoginPageView,
} from "../viewCheckers";
import mainPageViewAction from "./mainPageViewAction";
import lpListViewAction from "./lpListViewAction";
import lpFilterViewAction from "./lpFilterViewAction";
import generatorViewAction from "./generatorViewAction";
import loginPageViewAction from "./loginPageViewAction";

const qKeyActions = (magentoBody) => {
  if (isMainView()) {
    mainPageViewAction();
  } else if (isLpListView()) {
    lpListViewAction();
  } else if (isLpFilterView()) {
    lpFilterViewAction();
  } else if (isGeneratorView()) {
    generatorViewAction(magentoBody);
  } else if (isLoginPageView()) {
    loginPageViewAction(magentoBody);
  }
};

export default qKeyActions;
