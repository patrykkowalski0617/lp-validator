import {
  dateStart,
  dateEnd,
  url,
  title,
  mechanic,
  code,
  hexColor,
  terms,
  teaser,
  steps,
} from "../dataPickers";

// this function call all dataPickers
// and collect data in taskData object

const collectTaskData = (jiraBody) => {
  const taskData = {};
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

  return taskData;
};

export default collectTaskData;
