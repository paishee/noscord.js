---

<br>

<a href="https://github.com/paigeroid/noscord.js"><img height=75 src="https://github.com/paigeroid/noscord.js/blob/main/assets/noscord.js%20logo.png" alt="N⦿SCORD.JS">

<a href="https://www.npmjs.com/package/noscord.js"><img src="https://img.shields.io/npm/v/noscord.js?style=flat&color=red&logo=npm&logoColor=white" alt="version" />
<a href="https://www.npmjs.com/package/noscord.js"><img src="https://img.shields.io/npm/dt/noscord.js?style=flat&color=green&logo=docusign&logoColor=white" alt="downloads" />
<a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/badge/powered by-Discord.JS-blue?style=flat&color=5539cc&logo=discord&logoColor=white" alt="discord.js" />
<img src="https://github.com/paigeroid/noscord.js/actions/workflows/publish-shit.yml/badge.svg" alt="publish">

- noscord.JS is a customized Discord API for Node.JS that is similar to older versions of Discord.JS in that you can access most of the API from the client instead of having to go through types though because it's built on the latest versions of Discord.JS you can still use them if you wish<br><br>

- It contains a plethora of services letting you more easily access parts of the API from the tips of your fingers<br><br>

⚠️ __PLEASE NOTE:__
this package is currently in development and is far from finished ⚠️ 

<br>

```console
npm i noscord.js
```
```console
npm i paigeroid/noscord.js
```

<br>

--- 

<br><br>

```js
const { Client } = require('noscord.js');
const client = new Client(/* stuff */);


client.on("ready", (ctx) => {
    console.log(`logged in as ${ctx.user.username}`);
});


const { commands, channels, users, events, components, app } = client.services;


let event = events.create();
client.events.push("pingCmd", event);


client.on("pingCmd", async (ctx, cmd) => {
    let channel = await channels.get("channel id");
    channel.send(`${cmd.name} command ran by ${ctx.author} in guild ${ctx.guild.name} (${ctx.guild.id})`);
});


commands.create("ping", "replies with pong", (ctx, cmd) => {
    ctx.reply("pong!");
    event.fire(ctx, cmd);
});


let options = [{
    name: "user",
    description: "user to get the avatar of",
    type: "user",
    required: false
}];


commands.create({ name: "avatar", desc: "sends a users' avatar", options: options }, async (ctx, cmd) => {
    let user;


    if (cmd.args[0]) user = await users.get(cmd.args[0].value);
    else user = ctx.author;


    let { png } = await users.avatar(user, { width: 100, height: 100 });
    let timestamp = new app.Timestamp();


    let embed = new components.Embed({
        title: `${user.username}'s avatar`,
        image: png,
        timestamp: timestamp.embed
    });


    ctx.reply({ embeds: [embed], files: [png] });
});


client.login(token);
```

<br>

## Disclaimer
this project is created out of love for Discord development<br>
this project and the developers behind it are:
- not associated with Discord or Discord.JS
- not responsible for anything created using the API

<br><br>

## Collaborators

<table>
    
  <tr>
    <td align="center"><a href="https://github.com/paigeroid"><img src="https://avatars.githubusercontent.com/u/88659700?v=4?s=100" width="100px;" alt="me"/><br /><sub><b>paigeroid</b></sub></a><br/>
    <td align="center"><a href="https://github.com/RockyRosso"><img src="https://avatars.githubusercontent.com/u/79947006?v=4?s=100" width="100px;" alt="rocky"/><br /><sub><b>RockyRosso</b></sub></a><br/>
    <td align="center"><a href="https://github.com/polish-penguin-dev"><img src="https://avatars.githubusercontent.com/u/74113025?v=4?s=100" width="100px;" alt="penguins"/><br /><sub><b>penguin dev</b></sub></a><br/>
</td>
    
      
</table>
