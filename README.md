# flying-squid-template

Create a server!  
A template server for flying-squid with auto-updater, log compression and more!

## Directories and files

`src` - Autoupdate and other stuff. Mostly you don't need to touch.  
`server.js` - the main server code. Everything here is commented.  
`config/config.js` - config files for flying-squid.  
`logs` - (Generated on startup) - Server logs.  
`logs.zip` - Compressed logs. On every startup logs from ./logs/ are compressed to logs.zip and removed from the logs folder.  
`world` - World files
