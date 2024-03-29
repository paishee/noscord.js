const User = require('../index.js');


User.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("guilds", "messages", "channels", "users", "util");

    // names
    this.username = ctx.username;
    this.tag = (ctx.tag && ctx.tag.endsWith("#0")) ? ctx.username : (ctx.tag) ? ctx.tag : null;
    this.url = `https://discord.com/users/${ctx.id}`;
    this.discriminator = ctx.discriminator;
    this.globalName = ctx.globalName;
    
    
    // ids
    this.id = ctx.id;
    this.mention = `<@${ctx.id}>`
    this.flags = ctx.flags;
    this.bot = ctx.bot;
    this.system = ctx.system;


    // accessories
    this.avatar = await users.avatar(ctx);
    this.avatarUrl = users.avatarUrl(ctx);
    /*
    this.decor = await users.decor(ctx);
    this.decorUrl = users.decorUrl(ctx)
    this.banner = await users.banner(ctx);
    this.bannerUrl = await users.bannerUrl(ctx);
    */

    
    this.accent = {
        base10: ctx.acccentColor,
        hex: ctx.hexAccentColor,
		hexInt: (ctx.hexAccentColor) ? Number(ctx.hexAccentColor.replace("#", "0x")) : null
    };
    


    // presence
    this.presence = ctx.presence;
    this.status = (ctx.presence) ? ctx.presence.status : null;
    this.activity = (ctx.presence) ? ctx.presence.activity : null;
    this.partial = ctx.partial;


    // times
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
    };
    this.createdAt = ctx.createdAt;


    this.dms = ctx.dmChannel

    
    if (this.raw) return;
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});
});
