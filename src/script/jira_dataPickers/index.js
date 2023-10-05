import { bodyFlesh, customJSON } from "../_helpers";
import dateStart from "./dateStart/dateStart";
import dateEnd from "./dateEnd/dateEnd";
import url from "./url/url";
import title from "./title/title";
import mechanic from "./mechanic/mechanic";
import code from "./code/code";
import hexColor from "./hexColor/hexColor";
import terms from "./terms/terms";
import teaser from "./teaser/teaser";
import steps from "./steps/steps";

const jira = (jiraBody) => {
  const taskData = {};
  const collectTaskData = () => {
    const paragraphs = jiraBody.querySelectorAll(".ak-renderer-document p");
    taskData.dateStart = dateStart(paragraphs);
    taskData.dateEnd = dateEnd(paragraphs);
    taskData.url = url(paragraphs);
    taskData.title = title(paragraphs);
    taskData.mechanic = mechanic(paragraphs);
    taskData.code = code(paragraphs);
    taskData.hexColor = hexColor(paragraphs);
    taskData.terms = terms(paragraphs);
    taskData.teaser = teaser(paragraphs);

    const paragraphs_steps = jiraBody.querySelectorAll(
      ".ak-renderer-document ul, .ak-renderer-document ol, .ak-renderer-document p"
    );
    taskData.steps = steps(paragraphs_steps);
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
