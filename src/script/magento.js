import { bodyFlesh, customJSON, forceChangeEvent } from "./helpers";
import { renderProof, fillInput } from "./magento/helpers";

const magento = (magentoBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      console.clear();

      navigator.clipboard.readText().then((clipText) => {
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
        } = customJSON.parse(clipText);
        console.log(customJSON.parse(clipText));

        // title
        const titleFn = () => {
          if (title) {
            fillInput({
              proof: title.proof,
              value: title.data,
              inpSelector: ".admin__field-control [name=name]",
            });
          }
        };
        titleFn();
        // code
        const codeFn = () => {
          if (code) {
            const error = code.data.includes(",");

            fillInput({
              proof: code.proof,
              value: code.data,
              inpSelector: "[for^=banner_hero_promo_code_] + input",
              error,
            });
          }
        };
        codeFn();
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
        // url
        const urlFn = () => {
          if (url) {
            const urlInp = document.querySelector("[name=url]");
            const formatUrl = (value) => {
              if (value) {
                if (value.includes("/") || value.includes(".")) {
                  const _a = value.lastIndexOf("/");
                  const _b = value.lastIndexOf(".");
                  const a = _a === -1 ? 0 : _a + 1;
                  const b = _b < a ? value.length : _b;
                  const newValue = value.substring(a, b);
                  return newValue;
                }
              }
            };
            const data = formatUrl(url.data);
            urlInp.value = data;
            renderProof({
              container: urlInp.parentElement,
              proof: url.proof,
              error: url.error,
              warn: url.warn,
            });
            forceChangeEvent("[name=url]");
            const filterBtnInLpListView = document.querySelector(
              "[data-action=grid-filter-apply]"
            );

            if (filterBtnInLpListView) {
              setTimeout(() => {
                filterBtnInLpListView.click();
              }, 500);
            }
          }
        };
        urlFn();

        // date start
        const dateStartFn = () => {
          if (dateStart) {
            const dateStartInp = document.querySelector("[name=date_from]");
            const dateStr = {
              day: dateStart.data.substring(0, 2),
              month: dateStart.data.substring(2, 4),
              year: dateStart.data.substring(4),
            };
            const date = new Date();
            const taskStartDate = `${dateStr.day}/${dateStr.month}/${dateStr.year} 00:00`;
            const todayDate = `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()} 00:00`;
            dateStartInp.value =
              teaser.data === true ? taskStartDate : todayDate;
            const startProof =
              teaser.data === true
                ? dateStart.proof
                : `Data dzisiejsza ponieważ: "${teaser.proof}"`;
            renderProof({
              container: dateStartInp,
              proof: startProof,
            });
            forceChangeEvent("[name=date_from]");
          }
        };
        dateStartFn();
        // date end
        const dateEndFn = () => {
          if (dateEnd) {
            const dateEndInp = document.querySelector("[name=date_to]");
            const dateEndObj = {
              day: dateEnd.data.substring(0, 2),
              month: dateEnd.data.substring(2, 4),
              year: dateEnd.data.substring(4),
            };
            dateEndInp.value = `${dateEndObj.day}/${dateEndObj.month}/${dateEndObj.year} 23:59`;
            renderProof({ container: dateEndInp, proof: dateEnd.proof });
            forceChangeEvent("[name=date_to]");
          }
        };
        dateEndFn();
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
        const termsInp = document.querySelector(
          "[id*=terms_and_condition_content_]"
        );
        termsInp.value = terms.data;

        renderProof({
          container: termsInp,
          proof: terms.proof,
        });
        forceChangeEvent("[id*=terms_and_condition_content_]");

        bodyFlesh();
      });
    }
  });
};

export default magento;
