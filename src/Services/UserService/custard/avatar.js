const UserService = require('../index.js');


UserService.newF("avatar", async function(user, settings={}) {
    const client = this.parent;
    const att = new client.AttachmentService;

    let avatarUrl = user.displayAvatarURL(settings.dynamic);

    let stuff = att.create(avatarUrl, settings);
    stuff.originUrl = avatarUrl;

    return stuff;
});
