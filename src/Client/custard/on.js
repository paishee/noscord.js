const { Client } = require('../index.js');


Client.newF("on", function(event, func) {
	if (event instanceof Array) {
		event.forEach( (e) => {
			if (this.events.has(e)) {
				this.events.get(e).listen(func);
			}

			else {
				this._base.on(e, func);
			}
		})
	}
	else {
		if (this.events.has(event)) {
			this.events.get(event).listen(func);
		}

		else {
			this._base.on(event, func);
		}
	}

	return func;
});
