const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const filesToCopy = ["index.html", path.join("src", "styles.css")];

fs.rmSync(dist, { recursive: true, force: true });

for (const file of filesToCopy) {
  const from = path.join(root, file);
  const to = path.join(dist, file);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

console.log("dist フォルダに公開用ファイルを作成しました。");
