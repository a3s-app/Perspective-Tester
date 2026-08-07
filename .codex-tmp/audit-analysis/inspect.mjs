import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";
import fs from "node:fs/promises";

const inputPath =
  "/Users/khushwantparihar/Downloads/Kit Carson County A11y Audit _Do not add instances_ (8).xlsx";

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const renderDirectory =
  "/Users/khushwantparihar/Perspective-Tester/.codex-tmp/audit-analysis/renders";

await fs.mkdir(renderDirectory, { recursive: true });

const sheets = [];
for (let index = 0; index < 9; index += 1) {
  const sheet = workbook.worksheets.getItemAt(index);
  const usedRange = sheet.getUsedRange();
  sheets.push({ index, name: sheet.name, range: usedRange.address });

  const preview = await workbook.render({
    sheetName: sheet.name,
    autoCrop: "all",
    scale: 0.45,
    format: "png",
  });
  const safeName = sheet.name.replaceAll(/[^a-z0-9]+/gi, "-").toLowerCase();
  await fs.writeFile(
    `${renderDirectory}/${String(index + 1).padStart(2, "0")}-${safeName}.png`,
    new Uint8Array(await preview.arrayBuffer()),
  );
}

console.log(JSON.stringify(sheets, null, 2));
