const ChannelService = require('../index.js');


ChannelService.newF("typer", function(type) {
    let channel;

    switch(type) {
        case 0: channel = new types.TextChannel; break; // text channel
        case 1: channel = new types.DirectMessage; break; // dms
        case 2: channel = new types.VoiceChannel; break; // vcs
        case 3: channel = new types.GroupChat; break; // gcs
        case 4: channel = new types.Category; break; // categories
        case 5: channel = new types.TextChannel; break; // announcement channels
        case 10: channel = new types.ThreadChannel; break; // announcement threads
        case 11: channel = new types.ThreadChannel; break; // public threads
        case 12: channel = new types.ThreadChannel; break; // private threads
        case 13: channel = new types.StageChannel; break; // stage channel
        // case 14: channel = new types.HubChannel; break;
        // case 15: channel = new types.ForumChannel; break;
        // case 16: channel = new types.MediaChannel; break;
    };

    return channel
});
