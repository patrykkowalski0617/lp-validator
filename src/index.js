import "./main.scss";
import { magento } from "./script";
import jira from "./script/jira";

const jiraBody = document.querySelector("#jira");
const magentoBody = document.querySelector("#html-body");
if (jiraBody) {
  jira(jiraBody);
} else if (magentoBody) {
  magento(magentoBody);
}
