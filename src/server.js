const connect=require("./configs/db")

const app=require("./index")

app.listen(4825,async()=>{
    await connect();
    console.log("Listening on port 4825")
})