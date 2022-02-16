const app=require(`./src/index`);
const connect = require(`./src/config/db`)

app.listen(2345,async(req,res)=>{
    try
    {
        await connect();
        console.log("Listening on port 2345");
    }
    catch(e)
    {
        console.log(e.message);
    }
});