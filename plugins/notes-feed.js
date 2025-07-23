const fs = require("fs");
const path = require("path");
const yamlFront = require("yaml-front-matter");
const crypto = require("crypto");

// 支援 .md 及 .mdx 檔案
const MARKDOWN_EXTENSIONS = [".md", ".mdx"];

const processMarkdownFile = (filePath, parentPath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const frontMatter = yamlFront.loadFront(content);
  // 取得副檔名，支援 .md 及 .mdx
  const ext = path.extname(filePath);
  const fileName = path.basename(filePath, ext);
  const notePath = parentPath ? `${parentPath}/${fileName}` : fileName;

  delete frontMatter.__content;

  return {
    ...frontMatter,
    path: notePath,
    title: frontMatter.title ?? "",
    description: frontMatter.description ?? "",
    created:
      frontMatter.created && frontMatter.created !== ""
        ? new Date(frontMatter.created).toDateString()
        : new Date().toDateString(),
    draft: frontMatter.draft ?? false,
  };
};

const traverseDirectory = (dirPath, files = {}, parentPath = "") => {
  const entries = fs.readdirSync(dirPath);

  entries.forEach((entry) => {
    const entryPath = path.join(dirPath, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isDirectory()) {
      const newParentPath = parentPath ? `${parentPath}/${entry}` : entry;
      Object.assign(files, traverseDirectory(entryPath, files, newParentPath));
    } else if (MARKDOWN_EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      const hash = crypto.createHash("sha256").update(entryPath).digest("hex");
      files[hash] = {
        ...processMarkdownFile(entryPath, parentPath),
        fileName: entry,
      };
    }
  });

  return files;
};

module.exports = function (context) {
  return {
    name: "docusaurus-notes-feed-plugin",
    async contentLoaded() {
      const notesDir = path.resolve(context.siteDir, "./notes");
      const notes = traverseDirectory(notesDir);
      const outputPath = path.resolve(context.siteDir, "./notes/feed.json");

      fs.writeFileSync(outputPath, JSON.stringify(notes, null, 2));
    },
  };
};
