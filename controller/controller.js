const  {  default : axios  }  =  require ( "axios" ) ;
const { validationResult } = require("express-validator");
const res = require("express/lib/response");
const{Peinado}=require('../model/peinados');


const index = (req, res) =>{
    res.render("index", {title: "express"});
}

const controller ={
    index(req, res){
        res.render("index", {title: "express"});
    },
    users (req, res){
        res.send('respond with a resource');
    }

}
const verPeinado= async (req,res) =>{
    const peinados = await Peinado.find()
        res.json({peinados})
}

const verUnPeinado = async (req,res)=>{
    try{
        const peinados = await Peinado.findById(req.params.id);
        res.json({peinados})
    }
    catch (err){
        res.status(400).json({msg: 'error con el id', err})
    }
}

const crearPeinado = async (req,res)=>{
    try{
        const save = new Peinado (req.body);
        await save.save()
        res.status(201).json(save)
    }
    catch (err){
        res.status(501).json({msg: 'no se puede guardar, porfavor intenta mas tarde', err})
    }
}
const editarPeinado= async (req,res) =>{
    const error = validationResult(req)
    if (error.isEmpty()){
        const {id}=req.params
    const update= await Peinado.findByIdAndUpdate(id, req.body)
    res.status(202).json({modelo: req.body.modelo, update})
    } else { 
        res.status(501).json(error)
    }

}
const borrarPeinado= async (req,res)=>{
    try { 
        const peinados= await Peinado.findByIdAndDelete(req.params.id)
        res.json({msg: "se ha eliminado un peinado", Peinado})
    }catch (err){
        res.status(400).json({msg: "hay problemas al borrar"})
    }
}

const api = async(req,res)=>{
    const resultado = await axios.get("https://jsonplaceholder.typicode.com/users/",{timeout:1000}).catch((err)=>{
        err.origin = 'Error con la URL';
        throw err;
    });
    res.status(200).json(resultado.data)
}
module.exports={controller, index, verPeinado, crearPeinado, verUnPeinado, editarPeinado, borrarPeinado, api }