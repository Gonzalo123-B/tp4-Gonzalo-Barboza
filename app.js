const express = require("express")
const morgan= require("morgan")
const cors= require("cors")
const helmet=require("helmet")
const routes=require("./routes/index.js")
const port=process.env.PORT || 6000

const app=express()

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(express.json())

app.use("/",routes)

app.listen(port, ()=>{
    console.log(`servidor escuchando en el puerto ${port}`);
})