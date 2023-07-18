import { bodyFlesh, customJSON, forceChangeEvent } from "../helpers";
import { renderProof } from "./helpersMagento";
import titleFn from "./title";
import urlFn from "./url";
import codeFn from "./code";
import dateStartFn from "./dateStart";
import dateEndFn from "./dateEnd";

const magento = (magentoBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      console.clear();
      navigator.clipboard.readText().then((cliproofLowerCase) => {
        const taskData = customJSON.parse(cliproofLowerCase);
        const {
          title,
          url,
          dateStart,
          dateEnd,
          teaser,
          hex,
          code,
          mechanic,
          terms,
        } = taskData;
        console.log("magento taskData", taskData);

        titleFn(title);
        urlFn(url);
        codeFn(code);
        dateStartFn(dateStart, teaser);
        dateEndFn(dateEnd);
        // mechanic
        const mechanicFn = () => {
          if (mechanic) {
            const inpXY = document.querySelector(
              "[id^=products_x_for_y_promo_], [id^=products_new_x_for_y_promo_]"
            );
            const XYspendMoneyInp = document.querySelector(
              "[id^=products_x_for_y_promo_step_], [id^=products_new_x_for_y_promo_step_]"
            );
            const XYdiscountInp = document.querySelector(
              "[id^=products_x_for_y_promo_discount_], [id^=products_new_x_for_y_promo_discount_]"
            );
            const { data, proof } = mechanic;

            if (inpXY) {
              switch (data) {
                case "XY":
                  const dataClean = code.data
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
                    renderProof({ container: inpXY.parentElement, proof });
                    renderProof({ container: XYspendMoneyInp, proof });
                    renderProof({ container: XYdiscountInp, proof });
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

        // teaser
        const teaserInp = document.querySelector("[name=use_teaser]");
        const teaserFn = () => {
          if (teaser) {
            if (
              (teaser.data === true && teaserInp.value === 0) ||
              (teaser.data === false && teaserInp.value === 1)
            ) {
              document.querySelector("[name=use_teaser] + label").click();
            }
            renderProof({
              container: teaserInp.parentElement,
              proof: teaser.proof,
            });
          }
        };
        teaserFn();

        // headers dates
        const headersDates = () => {
          if (dateStart && dateEnd) {
            const h24 = 24 * 60 * 60 * 1000;

            const getDate = (inpSelector, source) => {
              const inp = document.querySelector(inpSelector);
              if (inp) {
                const { data: sourceDate, proof } = source;
                const sourceDay = sourceDate.substring(0, 2);
                const sourceMonth = sourceDate.substring(2, 4);
                const sourceYear = sourceDate.substring(4);

                const newDate = inpSelector.includes("0")
                  ? new Date(
                      new Date(
                        `${sourceYear}-${sourceMonth}-${sourceDay}T00:00`
                      ).getTime() + h24
                    )
                  : inpSelector.includes("1")
                  ? new Date(
                      new Date(
                        `${sourceYear}-${sourceMonth}-${sourceDay}T00:00`
                      ).getTime() - h24
                    )
                  : inpSelector.includes("2")
                  ? new Date(
                      new Date(
                        `${sourceYear}-${sourceMonth}-${sourceDay}T00:00`
                      ).getTime()
                    )
                  : null;

                const yyyy = String(newDate.getFullYear());
                const mm = String(newDate.getMonth() + 1).padStart(2, "0");
                const dd = String(newDate.getDate()).padStart(2, "0");
                const date = `${yyyy}-${mm}-${dd}T00:00`;
                inp.value = date;

                renderProof({ container: inp, proof });
                forceChangeEvent(inp);
              }
            };
            getDate("input#image-0_suffixPlaceholder", dateStart);
            getDate("input#image-1_suffixPlaceholder", dateEnd);
            getDate("input#image-2_suffixPlaceholder", dateEnd);
          }
        };
        headersDates();
        // hex
        const hexFn = () => {
          if (hex) {
            const hexInps = document.querySelectorAll(
              `.module__banner_hero .input__color__text,
               .module__banner_hero .input__color`
            );
            const { data, proof } = hex;
            hexInps.forEach((el) => {
              if (data.length) {
                el.value = `#${data}`;

                forceChangeEvent(el);
              }
              renderProof({ container: hexInps[0].parentElement, proof });
            });
          }
        };
        hexFn();

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

        // terms zawartość
        const termsFn = () => {
          if (terms) {
            const termsInp = document.querySelector(
              "[id*=terms_and_condition_content_]"
            );
            termsInp.value = terms.data;

            renderProof({
              container: termsInp,
              proof: terms.proof,
            });
            forceChangeEvent("[id*=terms_and_condition_content_]");
          }
        };
        termsFn();

        bodyFlesh();
      });
    }
  });
};

export default magento;
