module.exports = (handler) => { handler.init(

    
    name = ["messageReply", "reply"],  // names of the event

    
    func = async function (/**/) { // formatting for types and stuff
        let types = this.types;
        let msg = new types.Message;
        
        await msg.apply(...Array.from(arguments));
    
        return [msg, msg.replier];
    }, 

    
    glue = "messageCreate", // what discord.js event it's tied to

    
    term = function(ctx) { // specific action that triggers the event
        return !!ctx.reference;
    }
)}
