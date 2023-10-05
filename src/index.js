import "./main.scss";
import jira from "./script/jira";
import magento from "./script/magento";

const jiraBody = document.querySelector("#jira");
const magentoBody = document.querySelector("#html-body");
if (jiraBody) {
  jira(jiraBody);
} else if (magentoBody) {
  magento(magentoBody);
}
