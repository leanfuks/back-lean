const express = require('express');
const router = express.Router();
const {validarId}=require("../middleware/validation");
const {check, validationResult, body}=require("express-validator");
const {verPeinado, crearPeinado, verUnPeinado, editarPeinado, borrarPeinado} = require('../controller/controller');

router.post('/crear',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio"),
    check("corte").not().isEmpty().withMessage("el campo esta vacio"),
    check("color").not().isEmpty().withMessage("el campo esta vacio"),
    check("precio").not().isEmpty().withMessage("el campo esta vacio")
], crearPeinado);

router.put ('/editar/:id',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio"),
    check("corte").not().isEmpty().withMessage("el campo esta vacio"),
    check("color").not().isEmpty().withMessage("el campo esta vacio"),
    check("precio").not().isEmpty().withMessage("el campo esta vacio")
], validarId, editarPeinado);

router.get('/ver', verPeinado);
router.get('/ver/:id', validarId, verUnPeinado);
router.delete('/borrar/:id', validarId, borrarPeinado)

module.exports = router;