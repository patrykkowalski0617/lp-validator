import { bodyFlesh, customJSON } from "../helpers";
import terms from "./terms";
import title from "./title";
import mechanic from "./mechanic";
import url from "./url";
import teaser from "./teaser";
import dateStart from "./dateStart";
import dateEnd from "./dateEnd";
import hex from "./hex";
import code from "./code";

const jira = (jiraBody) => {
  const taskData = {};
  const collectTaskData = () => {
    const taskContentEl = jiraBody.querySelectorAll(".ak-renderer-document");

    taskContentEl.forEach((el) => {
      el.querySelectorAll("p").forEach((p) => {
        const proof = p.textContent;
        const proofLowerCase = proof.toLowerCase();
        if (
          proofLowerCase.includes("tytuł:") ||
          proofLowerCase.includes("tytuł*:")
        ) {
          taskData.title = title(proof, p, proofLowerCase);
        } else if (
          (proofLowerCase.includes("url:") || p.querySelector("a")) &&
          // return data from first p that pass test
          !taskData.url
        ) {
          taskData.url = url(proof, p, proofLowerCase);
        } else if (
          proofLowerCase.includes("promocja") &&
          proofLowerCase.includes("od") &&
          proofLowerCase.includes("do") &&
          proofLowerCase.includes("kod") &&
          proofLowerCase.length > 150
        ) {
          taskData.terms = terms(proof, p, proofLowerCase);
        } else if (
          proofLowerCase.includes("mechanika:") ||
          proofLowerCase.includes("mechanika**:")
        ) {
          taskData.code = code(proof);
          taskData.mechanic = mechanic(proof, taskData.code.data);
        } else if (
          proofLowerCase.includes("teaser:") ||
          proofLowerCase.includes("teaser (")
        ) {
          taskData.teaser = teaser(proof);
        } else if (proofLowerCase.includes("data od")) {
          taskData.dateStart = dateStart(proof, proofLowerCase);
        } else if (proofLowerCase.includes("data do")) {
          taskData.dateEnd = dateEnd(proof, proofLowerCase);
        } else if (
          proofLowerCase.includes("hex") ||
          proofLowerCase.includes("kolor:")
        ) {
          taskData.hex = hex(proof, proofLowerCase);
        }
      });
    });
  };

  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      console.clear();
      collectTaskData();
      console.log("jira taskData", taskData);
      const string = customJSON.stringify(taskData);
      navigator.clipboard.writeText(string);
      bodyFlesh();
    }
  });
};

export default jira;
