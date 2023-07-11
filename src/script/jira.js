import { bodyFlesh, customJSON } from "./helpers";
import { termsAndConditionText, title } from "./jiraFns";

const jira = () => {
  const jiraBody = document.querySelector("#jira");

  const taskData = {};

  if (jiraBody) {
    const collectTaskData = () => {
      const taskContentEl = jiraBody.querySelectorAll(".ak-renderer-document");
      const date = new Date();
      taskContentEl.forEach((el) => {
        el.querySelectorAll("p").forEach((p) => {
          const proof = p.textContent;
          const pText = proof.toLowerCase();
          if (pText.includes("tytuł:") || pText.includes("tytuł*:")) {
            taskData.title = title(proof, p, pText);
          } else if (pText.includes("url:")) {
            let a, warn, error, data;
            if (p.querySelector("a")) {
              a = p.querySelector("a");
            } else {
              a = document.querySelector(".ak-renderer-document a");
              warn = true;
            }
            console.log("a", a);
            if (a) {
              data = a.href;
            } else {
              data = null;
              error = true;
            }
            taskData.url = { data, proof, warn, error };
          } else if (
            pText.includes("promocja") &&
            pText.includes("od") &&
            pText.includes("do") &&
            pText.includes("kod") &&
            pText.length > 150
          ) {
            taskData.termsAndConditionText = termsAndConditionText(
              proof,
              p,
              pText
            );
          } else if (
            pText.includes("mechanika:") ||
            pText.includes("mechanika**:")
          ) {
            const code = () => {
              const take1 = proof
                .split(" ")
                .filter((x) => {
                  let i = 0;
                  let character = "";
                  let firstLetter = "";
                  let secondLetter = "";
                  while (i <= x.length) {
                    character = x.charAt(i);
                    if (x.replace(/[^a-z0-9]/gi, "").length === x.length) {
                      if (character == character.toUpperCase() && i === 0) {
                        firstLetter = true;
                      }
                      if (character == character.toUpperCase() && i === 1) {
                        secondLetter = true;
                      }
                    }
                    i++;
                  }
                  return firstLetter && secondLetter;
                })
                .join();
              const data = isNaN(Number(take1)) ? take1 : "";
              taskData.code = { data, proof };
            };
            code();
            const mechanic = () => {
              const proof = taskData.code.proof;

              const XY = taskData.code.data.toLowerCase().includes("za");
              const amount =
                proof.toLowerCase().includes("kwoto") ||
                (proof.toLowerCase().includes("kodem") &&
                  !proof.toLowerCase().includes("proc"));
              const proc = proof.toLowerCase().includes("proc");
              const limit = proof.toLowerCase().includes("limi");

              const data = limit
                ? "limit"
                : XY
                ? "XY"
                : amount
                ? "amount"
                : proc
                ? "proc"
                : "";

              taskData.mechanic = { data, proof };
            };
            mechanic();
          } else if (pText.includes("teaser:") || pText.includes("teaser (")) {
            const start = proof.indexOf(":");
            const data = String(proof.substring(start).includes("tak"));
            taskData.teaser = { data, proof };
          } else if (pText.includes("data od")) {
            const take1 = pText
              .substring(pText.indexOf("data od"))
              .split(" ")
              .filter((a) => !a.includes(":"))
              .map((x) => x.replace(/\D/g, ""))
              .filter((y) => Number(y))
              .join("");
            const data = take1.length < 5 ? take1 + date.getFullYear() : take1;

            taskData.dateStart = { data, proof, error: true };
          } else if (pText.includes("data do")) {
            const take1 = pText
              .substring(pText.indexOf("data do"))
              .split(" ")
              .filter((a) => !a.includes(":"))
              .map((x) => x.replace(/\D/g, ""))
              .filter((y) => Number(y))
              .join("");
            const data = take1.length < 5 ? take1 + date.getFullYear() : take1;

            taskData.dateEnd = { data, proof };
          } else if (pText.includes("hex")) {
            const start = proof.indexOf(":") + 1;
            const _data = proof.substring(start).replaceAll("#", "").trim();
            const data = _data.length === 6 ? _data : "";
            taskData.hex = { data, proof };
          }
        });
      });
    };

    window.addEventListener("keypress", (e) => {
      if (e.code === "KeyQ" && e.ctrlKey) {
        console.clear();
        collectTaskData();
        console.log("taskData", taskData);
        const string = customJSON.stringify(taskData);
        navigator.clipboard.writeText(string);
        bodyFlesh();
      }
    });
  }
};

export default jira;
