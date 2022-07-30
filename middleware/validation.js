const {Peinado}=require("../model/peinados")
const validarId = async (req,res,next) =>{
    const peinados =await Peinado.findById(req.params.id)
    if (peinados !== null){
        req.peinados = peinados; /*ACAAAA*/
        next();
    } else {
        res.json({msg: "el id es invalido"})
    }
}

module.exports={validarId}