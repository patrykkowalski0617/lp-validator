import {
  isGeneratorView,
  isLpListView,
  isLpFilterView,
  isMainView,
} from "../viewCheckers";
import mainPageViewAction from "./mainPageViewAction";
import lpListViewAction from "./lpListViewAction";
import lpFilterViewAction from "./lpFilterViewAction";
import generatorViewAction from "./generatorViewAction";

const qKeyActions = (magentoBody) => {
  if (isMainView()) {
    mainPageViewAction();
  } else if (isLpListView()) {
    lpListViewAction();
  } else if (isLpFilterView()) {
    lpFilterViewAction();
  } else if (isGeneratorView()) {
    generatorViewAction(magentoBody);
  }
};

export default qKeyActions;
