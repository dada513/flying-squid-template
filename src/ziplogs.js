/*
    Compresses the log folder to a zip file.
*/
const logSymbol = require("log-symbols");
const { zip } = require("zip-a-folder");
const extract = require("extract-zip");
const path = require("path");
const fs = require("fs-extra");
module.exports.zip = async function ziplogs() {
  const logdir = path.join(__dirname, "../logs");
  const zipdir = path.join(__dirname, "../logs.zip");
  const tmpdir = path.join(__dirname, "../tmp");
  await fs.ensureDir(logdir);
  if (await fs.exists(zipdir)) {
    await extract(zipdir, { dir: tmpdir });
  }
  await fs.copy(logdir, tmpdir);
  await fs.ensureDir(tmpdir);
  await zip(tmpdir, zipdir);
  await fs.remove(tmpdir);
  await fs.remove(logdir);
  console.log(logSymbol.success, "Compressed logs");
};
