module.exports = (handler) => { handler.init(

    
    name = "channelDelete",  // names of the event

    
    func = async function (ctx) { // formatting for types and stuff
        let types = this.types;
        let action = new types.VictimChannel;
        
        await action.apply(ctx, 1);
        
        return [action, action.moderator, action.guild];
    }, 

    
    glue = "channelDelete", // what discord.js event it's tied to
)}
