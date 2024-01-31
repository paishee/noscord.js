const { Soup } = require('stews');
const SelectChannelGroup = require('../index.js');
const pend = require('pender');


SelectChannelGroup.newF("apply", async function(obj) {
    const client = this.parent.parent;
    client.import("channels");

    let stuff = Soup.from(obj);
    let bases = new Soup(Object);
  

    stuff.forEach( (id, base) => {
        bases.push(id, base);
        this.push(id, pend( () => messages.get(id, base.guild), `<${id}>` ))
    });

    
    Object.defineProperties(this, {
        raw: { get: () => this.map( id => bases[id] ) },
        names: { get: () => this.map( id => bases[id].name ) },
        
        text: { get: () => this.filter( (id) => bases[id].type == 0 ) },
        dms: { get: () => this.filter( (id) => bases[id].type == 1 ) },
        voice: { get: () => this.filter( (id) => bases[id].type == 2 ) },
        gcs: { get: () => this.filter( (id) => bases[id].type == 3 ) },
        categories: { get: () => this.filter( (id) => bases[id].type == 4 ) },
        threads: { get: () => this.filter( (id) => (bases[id].type == 11 || bases[id].type == 12) ) },
        publicThreads: { get: () => this.filter( (id) => bases[id].type == 11 ) },
        privateThreads: { get: () => this.filter( (id) => bases[id].type == 12 ) },
        stages: { get: () => this.filter( (id) => bases[id].type == 13 ) },
        forums: { get: () => this.filter( (id) => bases[id].type == 15 ) },
        media: { get: () => this.filter( (id) => bases[id].type == 16 ) },

        named: { value: (name) => this.filter( (id) => bases[id].name == name ) },
        with: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).has(...args) ) },
        startingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).startsWith(...args) ) },
        endingWith: { value: (...args) => this.filter( id => (Noodle.from(bases[id].name)).endsWith(...args) ) },
        inCategory: { value: (id) => this.filter( (id) => {
            let base = bases[id];
            if (!base.parent) return false;
            return base.parent.id == id
        }) }
    })
})
