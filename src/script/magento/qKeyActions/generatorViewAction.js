import { bodyFlesh, customJSON } from "../../_helpers";
import {
  titleFn,
  urlFn,
  codeFn,
  dateStartFn,
  dateEndFn,
  teaserFn,
  hexColorFn,
  termsFn,
  headerDatesFn,
  mechanicFn,
} from "../dataInjectors";
import steps from "../dataInjectors/steps/steps";

const generatorViewAction = () => {
  navigator.clipboard.readText().then((clitextLowerCase) => {
    const taskData = customJSON.parse(clitextLowerCase);
    const {
      title: taskTitle,
      url: taskUrl,
      dateStart: taskDateStart,
      dateEnd: taskDateEnd,
      teaser: taskTeaser,
      hexColor: taskHexColor,
      code: taskCode,
      mechanic: taskMechanic,
      terms: taskTerms,
      steps: taskSteps,
    } = taskData;
    // console.clear();
    console.log("magento taskData", taskData);

    titleFn(taskTitle);
    urlFn(taskUrl);
    teaserFn(taskTeaser);
    dateStartFn(taskDateStart, taskTeaser);
    dateEndFn(taskDateEnd);
    codeFn(taskCode);
    hexColorFn(taskHexColor);
    termsFn(taskTerms);
    headerDatesFn({
      dateSource: taskDateStart,
      actionType: "+",
      numOfDays: 1,
      inputSelector: "input#image-0_suffixPlaceholder",
    });
    headerDatesFn({
      dateSource: taskDateEnd,
      actionType: "-",
      numOfDays: 2,
      inputSelector: "input#image-1_suffixPlaceholder",
    });
    headerDatesFn({
      dateSource: taskDateEnd,
      actionType: "-",
      numOfDays: 1,
      inputSelector: "input#image-2_suffixPlaceholder",
    });
    steps(taskSteps);
    if (taskMechanic) {
      mechanicFn(taskMechanic);
    }

    // Default clicks
    // const defaultFixBtns = document.querySelectorAll(".chill-btn-defaultFix");
    // defaultFixBtns.forEach((defaultFixBtn) => {
    //   defaultFixBtn.click();
    // });
    bodyFlesh();
  });
};

export default generatorViewAction;
