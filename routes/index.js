const { Router } = require("express");
const routes=Router()
const {rutaGet,rutaPost,rutaPut,rutaDelete}= require("../controllers/index.js")

routes.get("/get", rutaGet)
routes.post("/post",rutaPost )
routes.put("/put",rutaPut )
routes.delete("/delete",rutaDelete )

module.exports=routes