const Sniper = require('../lib/Client');

module.exports = async () => {
   if (!settings.tokens.main) return logger.critical(constants.noMain);

   // Main
   await new Promise((fulfill) => {
      setTimeout(async () => {
         let client = await new Sniper().init(settings.tokens.main);
         if (client) {
            active.push(client);
            if (settings.status.main.toLowerCase() !== 'default') {
               client.user.setStatus(settings.status.main.toLowerCase());
               client.user.setAFK(true);
            }
         }
         fulfill();
      }, util.randomInt(1e3, 3e3));
   });
};