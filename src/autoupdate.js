const { dots } = require("cli-spinners");
const ora = require("ora");
const axios = require("axios");
const semver = require("semver");
const logSymbol = require("log-symbols");
const exec = require("./run");
const colors = require("colors");
const currentVersion = require("flying-squid/package.json").version;

module.exports = async function autoUpdpater() {
  const res = await axios.get(`https://registry.npmjs.org/flying-squid`);
  const versions = res.data.versions;
  const lastPublish =
    versions[Object.keys(versions)[Object.keys(versions).length - 1]];
  const lastVersion = lastPublish.version;

  if (semver.diff(currentVersion, lastVersion)) {
    const spinner = ora({
      text: `Updating flying-squid, you are not on the latest version.`,
      spinner: dots,
      color: "blue",
    }).start();
    await exec("npm install flying-squid@latest --save");
    spinner.stop();
    console.log(logSymbol.success, "Successfully updated flying-squid");
    return;
  } else {
    console.log(
      logSymbol.info,
      `You are running the latest version of flying-squid, ${colors.blue(
        currentVersion
      )}`
    );
  }
};
