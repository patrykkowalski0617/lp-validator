import { bodyFlesh, customJSON } from "../_helpers";
import { collectTaskData } from "./_helpers";

const jira = (jiraBody) => {
  window.addEventListener("keypress", (e) => {
    if (e.code === "KeyQ" && e.ctrlKey) {
      console.clear();
      const taskData = collectTaskData(jiraBody);
      console.log("jira taskData", taskData);
      const string = customJSON.stringify(taskData);
      navigator.clipboard.writeText(string);
      bodyFlesh();
    }
  });
};

export default jira;
