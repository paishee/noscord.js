const TextChannel = require('../index.js');
const { Soup } = require('stews');
const pend = require('pender');


TextChannel.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "guilds", "util", "types");

    // information
    let base = new types.BaseChannel;
	await base.apply(ctx);

	Object.assign(this, base);


    // stuff
    this.flags = ctx.flags;
    this.partial = ctx.partial;
    this.permissionOverwrites = ctx.permissionOverwrites;
    this.permissionsLocked = ctx.permissionsLocked;
    this.position = ctx.position;
    this.rateLimitPerUser = ctx.rateLimitPerUser;
    this.rawPosition = ctx.rawPosition;
    this.threads // await channels.threads(ctx);


	// groups
    this.groups = pend( async () => {
        let stuff = new Soup({
            messages: new types.MessageGroup(),
        });

        for (let i = 0; i < stuff.length; i++) {
            await stuff.values[i].apply(ctx);
        }

        return stuff
    }, "ChildGroups" );
	
	this.children = this.groups

	
    if (ctx.lastMessageId) {
		this.lastMsg = await messages.get(ctx.lastMessageId);
    	this.lastMsgId = ctx.lastMessageId;
	}


    // times
    this.timestamps.lastPin = new Timestamp(ctx.lastPinAt)


	// raw
    Object.defineProperty(this, "raw", {
		get() { return ctx }	
	});


	// function forking
	let pd = Soup.from(Object.getOwnPropertyDescriptors(ctx.__proto__));
    pd = pd.merge( Soup.from(Object.getOwnPropertyDescriptors(ctx.__proto__.__proto__)) );

    let basepd = Soup.from( Object.getOwnPropertyDescriptors(ctx.__proto__.__proto__.__proto__));

    for ( let [ prop, data ] of basepd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }

    for ( let [ prop, data ] of pd ) {
        if (this.__proto__[prop] == undefined && this[prop] == undefined) {
            if (data.value && data.value instanceof Function) data.value = data.value.bind(ctx);
            else if (data.get) data.get = data.get.bind(ctx);

            Object.defineProperty(this.__proto__, prop, data);
        }
    }
});
