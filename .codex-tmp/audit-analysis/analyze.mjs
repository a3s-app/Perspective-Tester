import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath =
  "/Users/khushwantparihar/Downloads/Kit Carson County A11y Audit _Do not add instances_ (8).xlsx";
const issueSheetNames = [
  "Automated Tool",
  "Screen Reader",
  "Keyboard Navigation",
  "Color Contrast",
  "Browser Zoom",
  "Text Spacing",
];

const clean = (value) => String(value ?? "").trim();
const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const statusSheet = workbook.worksheets.getItem("Status");
const statusValues = statusSheet.getUsedRange().values;
const statusHeaders = statusValues[0].map(clean);
const statusRows = statusValues
  .slice(1)
  .filter((row) => clean(row[0]));
const testedRows = statusRows.filter((row) => clean(row[1]).toLowerCase() === "tested");
const scheduledRows = statusRows.filter(
  (row) => clean(row[2]) && clean(row[1]).toLowerCase() !== "tested",
);
const methodColumnIndexes = [4, 5, 6, 7, 8, 9, 10];

const testingMonthCounts = {};
for (const row of testedRows) {
  const key = clean(row[2]) || "Unspecified";
  testingMonthCounts[key] = (testingMonthCounts[key] ?? 0) + 1;
}

const statusSummary = {
  headers: statusHeaders,
  trackedUrls: statusRows.length,
  testedUrls: testedRows.length,
  scheduledNotTested: scheduledRows.length,
  completedMethodCells: testedRows.reduce(
    (total, row) =>
      total +
      methodColumnIndexes.filter((index) => clean(row[index]).toLowerCase() === "done")
        .length,
    0,
  ),
  testingMonthCounts,
  scheduledRows: scheduledRows.map((row) => ({ url: clean(row[0]), month: clean(row[2]) })),
};

const executionSheet = workbook.worksheets.getItem("Test Execution Sheet");
const executionValues = executionSheet.getUsedRange().values;
const criterionHeaders = executionValues[0].slice(2).map(clean).filter(Boolean);
const executionRows = executionValues
  .slice(2)
  .filter((row) => clean(row[1]));
let recordedResults = 0;
let failResults = 0;
let passOrNaResults = 0;
for (const row of executionRows) {
  for (const value of row.slice(2, 2 + criterionHeaders.length)) {
    const normalized = clean(value).toLowerCase();
    if (!normalized) continue;
    recordedResults += 1;
    if (normalized === "fail") failResults += 1;
    if (normalized === "pass/na") passOrNaResults += 1;
  }
}

const issueSummaries = [];
const allIssues = [];
for (const sheetName of issueSheetNames) {
  const sheet = workbook.worksheets.getItem(sheetName);
  const values = sheet.getUsedRange().values;
  const rows = values
    .slice(1)
    .filter((row) => clean(row[0]) || clean(row[1]) || clean(row[3]));
  const statusCounts = {};
  const qaCounts = {};
  const severityCounts = {};
  const monthCounts = {};
  for (const row of rows) {
    const issue = {
      sheet: sheetName,
      id: clean(row[0]),
      url: clean(row[1]),
      month: clean(row[2]),
      title: clean(row[3]),
      severity: clean(row[6]),
      criterion: clean(row[8]),
      conformance: clean(row[9]),
      remediationMonth: clean(row[11]),
      devStatus: clean(row[12]),
      qaStatus: clean(row[14]),
    };
    allIssues.push(issue);
    const status = issue.devStatus || "Blank";
    const qa = issue.qaStatus || "Blank";
    const severity = issue.severity || "Blank";
    const month = issue.month || "Blank";
    statusCounts[status] = (statusCounts[status] ?? 0) + 1;
    qaCounts[qa] = (qaCounts[qa] ?? 0) + 1;
    severityCounts[severity] = (severityCounts[severity] ?? 0) + 1;
    monthCounts[month] = (monthCounts[month] ?? 0) + 1;
  }
  issueSummaries.push({
    sheet: sheetName,
    rows: rows.length,
    statusCounts,
    qaCounts,
    severityCounts,
    monthCounts,
  });
}

const aggregate = (items, key) => {
  const counts = {};
  for (const item of items) {
    const value = item[key] || "Blank";
    counts[value] = (counts[value] ?? 0) + 1;
  }
  return counts;
};

const uniqueIssueIds = new Set(allIssues.map((issue) => issue.id).filter(Boolean));
const duplicateIssueIds = allIssues
  .map((issue) => issue.id)
  .filter((id, index, ids) => id && ids.indexOf(id) !== index);

console.log(
  JSON.stringify(
    {
      statusSummary,
      executionSummary: {
        pages: executionRows.length,
        criteria: criterionHeaders.length,
        possibleResults: executionRows.length * criterionHeaders.length,
        recordedResults,
        failResults,
        passOrNaResults,
      },
      issueSummaries,
      totalIssueRows: allIssues.length,
      uniqueIssueIds: uniqueIssueIds.size,
      duplicateIssueIds: [...new Set(duplicateIssueIds)],
      uniqueUrlsWithIssues: new Set(allIssues.map((issue) => issue.url).filter(Boolean)).size,
      aggregateDevStatus: aggregate(allIssues, "devStatus"),
      aggregateQaStatus: aggregate(allIssues, "qaStatus"),
      aggregateSeverity: aggregate(allIssues, "severity"),
      aggregateMonth: aggregate(allIssues, "month"),
      aggregateConformance: aggregate(allIssues, "conformance"),
      aggregateCriterion: aggregate(allIssues, "criterion"),
      doneAndQaFixed: allIssues.filter(
        (issue) =>
          issue.devStatus.toLowerCase() === "done" &&
          issue.qaStatus.toLowerCase() === "fixed",
      ).length,
      throughJuly: {
        issues: allIssues.filter((issue) => Number(issue.month) <= 46204).length,
        doneAndQaFixed: allIssues.filter(
          (issue) =>
            Number(issue.month) <= 46204 &&
            issue.devStatus.toLowerCase() === "done" &&
            issue.qaStatus.toLowerCase() === "fixed",
        ).length,
      },
      augustInProgress: {
        issues: allIssues.filter((issue) => Number(issue.month) === 46235).length,
        byMethod: issueSheetNames.map((sheet) => ({
          sheet,
          issues: allIssues.filter(
            (issue) => issue.sheet === sheet && Number(issue.month) === 46235,
          ).length,
        })),
      },
      criticalIssues: allIssues
        .filter((issue) => issue.severity === "1 - Critical")
        .map(({ sheet, id, url, month, title, devStatus, qaStatus }) => ({
          sheet,
          id,
          url,
          month,
          title,
          devStatus,
          qaStatus,
        })),
    },
    null,
    2,
  ),
);
