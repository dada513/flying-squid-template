const path = require("path");
const fs = require("fs");
const dir = path.join(__dirname, "..");
const logSymbol = require("log-symbols");

if (!fs.existsSync(path.join(dir, "world"))) {
  fs.mkdirSync(path.join(dir, "world"));
}
if (!fs.existsSync(path.join(dir, "config/config.json"))) {
  console.log(
    logSymbol.error,
    `No server's config found! config/config.json doesn't exist!`
  );
  process.exit(1);
}
