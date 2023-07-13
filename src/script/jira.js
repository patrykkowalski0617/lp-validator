import { bodyFlesh, customJSON } from "./helpers";
import { termsAndConditionText, title, mechanic, code } from "./jiraFns";

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
            console.log("p", p);
            if (p.querySelector("a")) {
              a = p.querySelector("a");
            } else {
              a = document.querySelector(".ak-renderer-document a");
              warn = true;
            }

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
            taskData.code = code(proof);
            taskData.mechanic = mechanic(proof, taskData.code.data);
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
