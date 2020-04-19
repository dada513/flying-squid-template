/*
    Flying-Squid configuration
*/
module.exports = {
  motd: "A Minecraft Server \nRunning flying-squid",
  port: 25565,
  "max-players": 10,
  "online-mode": true,
  logging: true,
  gameMode: 1,
  difficulty: 1,
  worldFolder: "world",
  generation: {
    name: "diamond_square",
    options: {
      worldHeight: 80,
    },
  },
  kickTimeout: 10000,
  plugins: {},
  modpe: false,
  "view-distance": 10,
  "player-list-text": {
    header: "Flying squid",
    footer: "A minecraft server",
  },
  "everybody-op": false,
  "max-entities": 100,
  version: "1.12.2",
};
