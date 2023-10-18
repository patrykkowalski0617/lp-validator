import { bodyFlesh, customJSON } from "../../_helpers";
import { renderProof } from "../_helpers";
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
    console.clear();
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
    // mechanic
    const mechanicFn = () => {
      if (taskMechanic) {
        const inpXY = document.querySelector(
          "[id^=products_x_for_y_promo_], [id^=products_new_x_for_y_promo_]"
        );
        const XYspendMoneyInp = document.querySelector(
          "[id^=products_x_for_y_promo_step_], [id^=products_new_x_for_y_promo_step_]"
        );
        const XYdiscountInp = document.querySelector(
          "[id^=products_x_for_y_promo_discount_], [id^=products_new_x_for_y_promo_discount_]"
        );
        const { data, text } = taskMechanic;

        if (inpXY) {
          switch (data) {
            case "XY":
              const dataClean = taskCode.data
                .toLowerCase()
                .split(",")
                .filter((x) => x.includes("za"))
                .join("");

              const zaIndex = dataClean.toLowerCase().indexOf("za");
              const XYspendMoney = dataClean.substring(zaIndex + 2);
              const XYdiscount = dataClean.substring(0, zaIndex);
              if (!inpXY.checked) {
                inpXY.click();
                XYspendMoneyInp.value = XYspendMoney;
                XYdiscountInp.value = XYdiscount;
                renderProof({
                  proofContainer: inpXY.parentElement.parentElement,
                  proof: text,
                });
                renderProof({
                  proofContainer: XYspendMoneyInp.parentElement.parentElement,
                  proof: text,
                });
                renderProof({
                  proofContainer: XYdiscountInp.parentElement.parentElement,
                  proof: text,
                });
              }
              break;

            default:
              if (inpXY.checked) {
                inpXY.click();
              }
              break;
          }
        } else {
          console.warn("inpXY not found");
        }
      }
    };
    mechanicFn();

    // Default clicks
    const bannerHeroDefault = () => {
      const btn = document.querySelectorAll(
        ".module__banner_hero .chill-btn"
      )[2];
      if (btn) {
        btn.click();
      }
      console.warn("btn is not found");
    };
    bannerHeroDefault();

    const listingDefault = () => {
      const modules = document.querySelectorAll(
        ".module__products, .module__products_new"
      );
      modules.forEach((module) => {
        const btn = module.querySelectorAll(".chill-btn")[2];
        btn.click();
      });
    };
    listingDefault();

    bodyFlesh();
  });
};

export default generatorViewAction;
