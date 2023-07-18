import { bodyFlesh, customJSON } from "./helpers";
import {
  terms,
  title,
  mechanic,
  code,
  url,
  teaser,
  dateStart,
  dateEnd,
  hex,
} from "./jiraFns";

const jira = () => {
  const jiraBody = document.querySelector("#jira");

  if (jiraBody) {
    const taskData = {};
    const collectTaskData = () => {
      const taskContentEl = jiraBody.querySelectorAll(".ak-renderer-document");

      taskContentEl.forEach((el) => {
        el.querySelectorAll("p").forEach((p) => {
          const proof = p.textContent;
          const pText = proof.toLowerCase();
          if (pText.includes("tytuł:") || pText.includes("tytuł*:")) {
            taskData.title = title(proof, p, pText);
          } else if (pText.includes("url:")) {
            taskData.url = url(proof, p);
          } else if (
            pText.includes("promocja") &&
            pText.includes("od") &&
            pText.includes("do") &&
            pText.includes("kod") &&
            pText.length > 150
          ) {
            taskData.terms = terms(proof, p, pText);
          } else if (
            pText.includes("mechanika:") ||
            pText.includes("mechanika**:")
          ) {
            taskData.code = code(proof);
            taskData.mechanic = mechanic(proof, taskData.code.data);
          } else if (pText.includes("teaser:") || pText.includes("teaser (")) {
            taskData.teaser = teaser(proof);
          } else if (pText.includes("data od")) {
            taskData.dateStart = dateStart(proof, pText);
          } else if (pText.includes("data do")) {
            taskData.dateEnd = dateEnd(proof, pText);
          } else if (pText.includes("hex")) {
            taskData.hex = hex(proof);
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
