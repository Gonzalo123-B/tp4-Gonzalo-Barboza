function rutaGet(req, res){
    res.status(200).send("esta es la ruta get")
}
function rutaPost(req, res){
    res.status(200).send("esta es la ruta post ")
}
 function rutaPut(req, res){
    res.status(200).send("esta es la ruta put ")
}
 function rutaDelete(req, res){
    res.status(200).send("esta es la ruta delete")
}

module.exports={
    rutaGet,
    rutaPost,
    rutaPut,
    rutaDelete
}