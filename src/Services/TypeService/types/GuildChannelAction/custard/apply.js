const GuildChannelAction = require('../index.js');


GuildChannelAction.newF("apply", async function(ctx, actionType) {
    const client = this.parent.parent;
    client.import("types", "messages", "channels", "guilds", "util");

	let channel;

	switch(ctx.type) {
        case 0: channel = new types.TextChannel; break;
        case 1: channel = new types.DirectMessage; break;
        case 2: channel = new types.VoiceChannel; break;
        case 3: channel = new types.GroupChat; break;
        case 4: channel = new types.Category; break;
        case 5: channel = new types.AnnouncementsChannel; break;
        case 10: channel = new types.AnnouncementsThread; break;
        case 11: channel = new types.ThreadChannel; break;
        case 12: channel = new types.ThreadChannel; break;
        case 13: channel = new types.StageChannel; break;
        // case 14: channel = new types.HubChannel; break;
        // case 15: channel = new types.ForumChannel; break;
        // case 16: channel = new types.MediaChannel; break;
    }

	await channel.apply(ctx);

	Object.assign(this, channel);

    this.deleted = (actionType == 1);
    this.edited = (actinType == 2);


    // times
    let deleted = this.deleted;
    let edited = this.edited;
    
    this.timestamps = {
        deleted: (deleted) ? new Timestamp() : undefined,
        edited: (edited) ? new Timestamp() : undefined
    }


    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
