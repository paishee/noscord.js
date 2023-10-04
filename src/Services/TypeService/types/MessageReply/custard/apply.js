const MessageReply = require('../index.js');


MessageReply.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    const guilds = new client.GuildService;
    const channels = new client.ChannelService;
    const messages = new client.MessageService;
    const users = new client.UserService;

    
    // content
    this.content = ctx.content;
    this.replier = (ctx.reference) ? await messages.get(ctx.reference.messageId, ctx.channel) : undefined;


    // ids
    this.id = ctx.id;
    this.channelId = ctx.channelId;
    this.guildId = ctx.guildId;
    this.webhookId = ctx.webhookId;
    this.appId = ctx.applicationId;


    // circle thingstuff
    this.guild = await guilds.get(this.guildId);
    this.channel = await channels.get(this.channelId);
    this.author = (ctx.author) ? ctx.author : (ctx.user) ? ctx.user : undefined;
    this.member = (ctx.member) ? ctx.member : await users.get(this.author.id, this.guild);


    // other stuff
    this.createdAt = ctx.createdTimestamp;
    this.type = ctx.type;
    this.system = ctx.system;


    // even more stuff
    this.pinned = ctx.pinned;
    this.tts = ctx.tts;
    this.nonce = ctx.nonce;


    // lists
    this.embeds = ctx.embeds;
    this.components = ctx.components;
    this.attachments = ctx.attachments;
    this.stickers = ctx.stickers;
    this.flags = ctx.flags;


    // even even more more stuff stuff
    this.position = ctx.position;
    this.mentions = ctx.mentions;
    this.reactions = ctx.reactions;
    this.roleSubscriptionData = ctx.roleSubscriptionData;
    this.editedAt = ctx.editedTimestamp;
    this.activity = ctx.activity;
    this.referece = ctx.reference;
    this.interaction = ctx.interaction;
    this.raw = ctx;
});