const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');
const { Soup } = require('stews');


VoiceService.newF("play", async function(audioDir, settings) {
    
    // gets channels the bot is in
    let me = Soup.from(await this.me(settings.guild));

    
    // stuff
    let resource = voice.createAudioResource(audioDir, settings.metadata);
    let player = (settings.player) ? settings.player : voice.createAudioPlayer(settings.behaviors);


    // plays the audio
    player.play(resource);


    // adds channels included
    me.forEach( (id, channel) => {
        let connection = this.get(channel); 
        connection.subscribe(channel);
    });

    
    return player;
});
