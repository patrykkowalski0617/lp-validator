import { bodyFlesh, customJSON, forceChangeEvent } from "./helpers";

const magento = () => {
  const magentoBody = document.querySelector("#html-body");
  if (magentoBody) {
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
            termsAndConditionText,
          } = customJSON.parse(clipText);
          console.log(customJSON.parse(clipText));
          const renderProof = (container, proof, warn, error) => {
            if (!container.parentElement.querySelector(".lp-validator-info")) {
              container.insertAdjacentHTML(
                "afterend",
                `<div class='lp-validator-info ${
                  error === "true" ? "lp-validator-error" : ""
                } ${warn === "true" ? "lp-validator-warn" : ""}'>
                  <p class='lp-validator-proof'>${proof}</p>
                  <button class="lp-validator-skip">add</button>
                </div>`
              );
              const skipBtn =
                container.parentElement.querySelector(".lp-validator-skip");
              const proofEl = container.parentElement.querySelector(
                ".lp-validator-proof"
              );
              const parent = proofEl.parentElement;
              proofEl.addEventListener("click", (e) => {
                navigator.clipboard.writeText(e.target.textContent);
                parent.classList.add("lp-validator-copied");
                setTimeout(() => {
                  parent.classList.remove("lp-validator-copied");
                }, 3000);
              });
              skipBtn.addEventListener("click", (e) => {
                e.preventDefault();
                parent.classList.toggle("lp-validator-skipped");
              });
            }
          };
          const fillInput = ({ proof, value, inpSelector, inpEl }) => {
            const inp = inpEl ? inpEl : document.querySelector(inpSelector);
            if (inp) {
              inp.value = value;
              renderProof(inp, proof);
              forceChangeEvent(inpSelector);
            } else {
              console.error("Input not found");
              renderProof(inp, proof, true);
            }
          };
          // title
          fillInput({
            proof: title.proof,
            value: title.data,
            inpSelector: "[name=name]",
          });
          // code
          fillInput({
            proof: code.proof,
            value: code.data,
            inpSelector: "[for^=banner_hero_promo_code_] + input",
          });
          // mechanic
          const mechanicFn = () => {
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

            switch (data) {
              case "XY":
                const zaIndex = code.data.toLowerCase().indexOf("za");
                const XYspendMoney = code.data.substring(zaIndex + 2);
                const XYdiscount = code.data.substring(0, zaIndex);
                if (!inpXY.checked) {
                  inpXY.click();
                  XYspendMoneyInp.value = XYspendMoney;
                  XYdiscountInp.value = XYdiscount;
                  renderProof(inpXY.parentElement, proof);
                  renderProof(XYspendMoneyInp, proof);
                  renderProof(XYdiscountInp, proof);
                }
                break;

              default:
                if (inpXY.checked) {
                  inpXY.click();
                }
                break;
            }
          };
          mechanicFn();
          // url
          const urlInp = document.querySelector("[name=url]");
          const formatUrl = (value) => {
            console.log("value", value);
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
          renderProof(urlInp.parentElement, url.proof, url.error, url.warn);
          forceChangeEvent("[name=url]");

          // date start
          const dateStartInp = document.querySelector("[name=date_from]");
          const dateStr = {
            day: dateStart.data.substring(0, 2),
            month: dateStart.data.substring(2, 4),
            year: dateStart.data.substring(4),
          };
          dateStartInp.value = `${dateStr.day}/${dateStr.month}/${dateStr.year} 00:00`;
          renderProof(dateStartInp, dateStart.proof, dateStart.error);
          forceChangeEvent("[name=date_from]");

          // date end
          const dateEndInp = document.querySelector("[name=date_to]");
          const dateEndObj = {
            day: dateEnd.data.substring(0, 2),
            month: dateEnd.data.substring(2, 4),
            year: dateEnd.data.substring(4),
          };
          dateEndInp.value = `${dateEndObj.day}/${dateEndObj.month}/${dateEndObj.year} 23:59`;
          renderProof(dateEndInp, dateEnd.proof);
          forceChangeEvent("[name=date_to]");

          // teaser
          const teaserInp = document.querySelector("[name=use_teaser]");
          if (
            (teaser.data === "true" && teaserInp.value === "0") ||
            (teaser.data === "false" && teaserInp.value === "1")
          ) {
            document.querySelector("[name=use_teaser] + label").click();
          }
          renderProof(teaserInp.parentElement, teaser.proof);

          // headers dates
          const headersDates = () => {
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
                      ).getTime() -
                        h24 * 2
                    )
                  : inpSelector.includes("2")
                  ? new Date(
                      new Date(
                        `${sourceYear}-${sourceMonth}-${sourceDay}T00:00`
                      ).getTime() - h24
                    )
                  : null;

                const yyyy = String(newDate.getFullYear());
                const mm = String(newDate.getMonth() + 1).padStart(2, "0");
                const dd = String(newDate.getDate()).padStart(2, "0");
                const date = `${yyyy}-${mm}-${dd}T00:00`;
                inp.value = date;

                renderProof(inp, proof);
                forceChangeEvent(inp);
              }
            };
            getDate("input#image-0_suffixPlaceholder", dateStart);
            getDate("input#image-1_suffixPlaceholder", dateEnd);
            getDate("input#image-2_suffixPlaceholder", dateEnd);
          };
          headersDates();
          // hex
          const hexFn = () => {
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
              renderProof(hexInps[0].parentElement, proof);
            });
          };
          hexFn();

          const bannerHeroDefault = () => {
            const btn = document.querySelectorAll(
              ".module__banner_hero .chill-btn"
            )[2];
            btn.click();
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
          const termsAndConditionTextInp = document.querySelector(
            "[id*=terms_and_condition_content_]"
          );
          termsAndConditionTextInp.value = termsAndConditionText.data;

          renderProof(termsAndConditionTextInp, termsAndConditionText.proof);
          forceChangeEvent("[id*=terms_and_condition_content_]");

          bodyFlesh();
        });
      }
    });
  }
};

export default magento;
