const ComponentService = require('../index.js');


ComponentService.newC("Blank", class {
    constructor(settings={}) {
        return { name: "** **", value: "** **", line: settings.line, inline: (settings.inline || settings.line) ? true : false }
    }
});

module.exports = Blank;
