import { bodyFlesh, customJSON } from "./helpers";

const jira = () => {
  const jiraBody = document.querySelector("#jira");

  const taskData = {};

  if (jiraBody) {
    const getTaskData = () => {
      const taskContentEl = jiraBody.querySelectorAll(".ak-renderer-document");
      const date = new Date();
      taskContentEl.forEach((el) => {
        el.querySelectorAll("p").forEach((p) => {
          const proof = p.textContent;
          const pText = proof.toLowerCase();
          if (pText.includes("promocja") && pText.length > 150) {
            const data = `<p>${p.innerHTML}</p>`
              .replace("Tekst do regulaminu:", "")
              .replace("tekst do regulaminu:", "");
            taskData.termsAndConditionText = { data, proof };
          } else if (pText.includes("tytuł:") || pText.includes("tytuł*:")) {
            const start = proof.indexOf(":") + 1;
            const data = proof.substring(start).trim();
            taskData.title = { data, proof };
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
                : null;

              taskData.mechanic = { data, proof };
            };
            mechanic();
          } else if (pText.includes("url:")) {
            const data = p.querySelector("a").href;
            taskData.url = { data, proof };
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

            taskData.dateStart = { data, proof };
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
            const data = proof.substring(start).replaceAll("#", "").trim();
            taskData.hex = { data, proof };
          }
        });
      });
    };

    window.addEventListener("keypress", (e) => {
      if (e.code === "KeyQ" && e.ctrlKey) {
        console.clear();
        getTaskData();
        console.log("taskData", taskData);
        const string = customJSON.stringify(taskData);
        navigator.clipboard.writeText(string);
        bodyFlesh();
      }
    });
  }
};

export default jira;
