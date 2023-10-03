import { bodyFlesh, customJSON } from "../helpers";
import terms from "./terms";
import teaser from "./teaser";
import hex from "./hex";
import code from "./code";
import dateStart from "./dateStart/dateStart";
import dateEnd from "./dateEnd/dateEnd";
import url from "./url/url";
import title from "./title/title";
import mechanic from "./mechanic/mechanic";

const jira = (jiraBody) => {
  const taskData = {};
  const collectTaskData = () => {
    const taskContentEls = jiraBody.querySelectorAll(".ak-renderer-document");
    const paragraphs = jiraBody.querySelectorAll(".ak-renderer-document p");
    taskData.dateStart = dateStart(paragraphs);
    taskData.dateEnd = dateEnd(paragraphs);
    taskData.url = url(paragraphs);
    taskData.title = title(paragraphs);

    taskContentEls.forEach((el) => {
      el.querySelectorAll("p").forEach((p) => {
        const proof = p.textContent;
        const proofLowerCase = proof.toLowerCase();

        if (
          proofLowerCase.includes("promocja") &&
          proofLowerCase.includes("od") &&
          proofLowerCase.includes("do") &&
          (proofLowerCase.includes("kod") ||
            proofLowerCase.includes("oznaczon")) &&
          proofLowerCase.length > 150
        ) {
          taskData.terms = terms(proof, p, proofLowerCase);
        } else if (
          proofLowerCase.includes("mechanika:") ||
          proofLowerCase.includes("mechanika**:")
        ) {
          taskData.code = code(proof);
          taskData._mechanic = mechanic(proof, taskData.code.data);
        } else if (
          proofLowerCase.includes("teaser:") ||
          proofLowerCase.includes("teaser (")
        ) {
          taskData.teaser = teaser(proof);
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
