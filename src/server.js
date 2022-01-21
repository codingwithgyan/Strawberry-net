const app=require(`./index`);
const connect = require(`./config/db`)

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