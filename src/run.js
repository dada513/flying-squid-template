const { exec } = require("child_process");

module.exports = function run(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      resolve(stdout);
    });
  });
};
