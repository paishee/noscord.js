const ChannelService = require('../index.js');


ChannelService.newF("delete", async function(channel, settings={}) {
    const client = this.parent;
    client.import("util", "types");

    if (!settings.after) settings.after = 0;
    let data = (channel.raw) ? channel.raw : channel;

    setTimeout( () => {
       data.delete(settings).catch(e=>{});
    }, util.parseMs(settings.after) );

    let typed = new types.VictimChannel;
    await typed.apply(data, 1);
    return typed;
});
