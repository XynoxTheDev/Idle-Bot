const { Command } = require('discord-akairo');

class Help extends Command {
    constructor() {
        super('help', {
            aliases: ['help']
        });
    }

    exec(message) {

        message.reply('The developers are working in the backend for the current issue/maintenance. Stay tuned to the <https://discord.gg/ZzbZpdw> for updates related to the bot.')

    }
}

module.exports = Help;
