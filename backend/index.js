const express = require("express");
const app=express();
const PORT=3000||process.env.PORT;
const rootRouter=require("./routes/index");

app.use("/api/v1",rootRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})


