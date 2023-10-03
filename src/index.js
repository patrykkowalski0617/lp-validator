import "./main.scss";
import jira_dataPickers from "./script/jira_dataPickers";
import magento from "./script/magento";

const jiraBody = document.querySelector("#jira");
const magentoBody = document.querySelector("#html-body");
if (jiraBody) {
  jira_dataPickers(jiraBody);
} else if (magentoBody) {
  magento(magentoBody);
}
