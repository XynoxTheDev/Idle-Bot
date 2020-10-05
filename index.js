// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');

    // Set the client user's activity
    // Set the client user's status
    client.user.setPresence({ game: { name: 'dp!help | Xynox The Dev' }, status: 'idle' });

});

client.on('message', message => {

    if (message.content === 'dp!help') {
        message.channel.send('The developers are working in the backend for the current issue/maintenance. Stay tuned to the <https://discord.gg/ZzbZpdw> for updates related to the bot.');
    }

});

// login to Discord with your app's token
client.login('NzU5NzYzODU1NjgwNjAyMTIy.X3CPOg.9sCNeizmRloM9hRDtoCGbdPebqY');
