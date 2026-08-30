const { spawn } = require("child_process");
const os = require("os");

const port = process.env.PORT || "5173";

function getLocalAddresses() {
  return Object.values(os.networkInterfaces())
    .flat()
    .filter((address) => address && address.family === "IPv4" && !address.internal)
    .map((address) => `http://${address.address}:${port}/`);
}

console.log("ひだまりホームページのプレビューを起動します。");
console.log(`パソコンで確認: http://localhost:${port}/`);

const localAddresses = getLocalAddresses();
if (localAddresses.length > 0) {
  console.log("iPhoneで確認する場合は、パソコンと同じWi-Fiに接続して次のURLを開いてください:");
  for (const url of localAddresses) {
    console.log(`- ${url}`);
  }
} else {
  console.log("iPhone用URLを自動取得できませんでした。パソコンのIPアドレスを確認してください。");
}

const server = spawn("python3", ["-m", "http.server", port, "--bind", "0.0.0.0"], {
  stdio: "inherit",
});

server.on("exit", (code) => process.exit(code ?? 0));
