const EventService = require('../index.js');
const { Soup } = require('stews');
const fs = require('fs');


EventService.newC("EventHandler", class {
    constructor() {
        this.client = this.parent.parent;
        this.types = this.client.types;
        this._base = this.client._base;
        
        this.default = this.client.DefEvents;
        this.custom = this.client.CustEvents;

        this.events = new Soup(Object);

        
        let ev_dir = require('./events/_funkydir');
        let ev = fs.readdirSync(ev_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));

        
        ev.forEach( file => {
            require(`./events/${file}`)(this);
        });
    }
});


module.exports = EventHandler;


const cust_dir = require('./custard/_funkydir');
let cust = fs.readdirSync(cust_dir).filter( file => ((file.endsWith('.js') || file.endsWith('.ts')) ));
        
cust.forEach( (file) => {
    require(`./custard/${file}`);
});
