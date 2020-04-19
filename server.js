/*
  The core of the server.
*/

/*
  createFiles.js
  Creates world folder and other required files
*/
require("./src/createFiles");

/*
  ziplogs.js
  Compresses server logs to a zip file 
*/
require("./src/ziplogs").zip();
/*
  autoupdate.js
  Automatically updates flying-squid to the latest version.
*/
const autoUpdate = require("./src/autoupdate");
/*
  cache.js
  Clears module cache so the autoupdater is possible.
*/
const clearModuleCache = require("./src/cache");
/*
  log-symbols
  Pretty logging
*/
const logSymbol = require("log-symbols");

/*
  main server function
  this is where all the code lies in.
*/
const server = async () => {
  /* 
    AutoUpdater
    Fetches the latest version of flying-squid and automatically updates
  */
  await autoUpdate();
  clearModuleCache();

  /*
    Server instance.
    Creates a flying-squid server using the options provided in ./config/config.js
  */
  const flyingsquid = require("flying-squid");
  flyingsquid.createMCServer(require("./config/config"));
  console.log(logSymbol.info, "Server started");
};
server();
