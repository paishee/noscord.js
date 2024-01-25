const { Soup } = require('stews');
const EmojiGroup = require('../index.js');
const pend = require('pender');


EmojiGroup.newF("apply", async function(guild) {
    const client = this.parent.parent;
    client.import("guilds", "types");

    let stuff = new Soup(Object);
    let bases = new Soup(Object);

    if (!guild) {
        let gList = Soup.from( await client._base.guilds.fetch() );

        for ( let i = 0; i < gList.length; i++) {
            let guild = gList.values[i];
            let list = await guild.emojis.fetch().catch(e=>console.log(e))
            stuff = stuff.merge( Soup.from(list));
        }
    }
    else {
        let list = await guild.raw.emojis.fetch().catch(e=>console.log(e))
        stuff = Soup.from(list);
    }


    stuff.forEach( (id, base) => {
        bases.push(id, base);
        let emoji = new types.Emoji;
        this.push(id, pend( async () => {
            
            await emoji.apply(base);
            return emoji;
            
        }, `<:${base.name}:${id}>` ));
    });

    Object.defineProperties(this, {
        static: { get: () => this.filter( (id) => !bases[id].animated ) },
        animated: { get: () => this.filter( (id) => bases[id].animated ) },
        named: { value: (name) => this.filter( (id) => bases[id].username == name ) }
    })
})
