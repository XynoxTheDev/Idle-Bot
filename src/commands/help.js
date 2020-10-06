const { Command } = require('discord-akairo');

class help extends Command {
    constructor() {
        super('help', {
			
        });
    }

    exec(message) {
        message.reply('The developers are working in the backend for the current issue/maintenance. Stay tuned to the <https://discord.gg/ZzbZpdw> for updates related to the bot.')
    }
}

module.exports = help;