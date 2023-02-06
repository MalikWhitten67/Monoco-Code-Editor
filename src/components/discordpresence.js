var fs = nw.require('fs');
const RPC = require("discord-rpc");
const rpc = new RPC.Client({ transport: 'ipc' });
try {
    
rpc.on("ready", () => {
    

    rpc.setActivity({
        details: `File: ${fs.readFileSync('./name.txt', 'utf8')}`, // Details!
        state: "", // State Of Your RPC Client
        startTimestamp: new Date(),
        largeImageKey: "", //  Name Of The Large Image You Uploaded In Assets
        largeImageText: "" // Text When Hovered On Large Image
        
        
    }); 
    
    
});
var clientId = "804043409047158814"
rpc.login({ clientId }).catch(console.error);
} catch (error) {
    swal.fire({
        title: "Error",
        text: error,
        icon: "error",
    })
}