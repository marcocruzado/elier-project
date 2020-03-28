const { Router } = require('express');
const Cliente = require('../models/Clientes');
const routes = Router();



//////////////
//Rutas:
/////////////


////////////////////////////
//Obtener todo
//Rutas:GET localhost:3000/
////////////////////////////
routes.get('/', async (req, res) => {

    const clientes = await Cliente.find();
    res.status(200).json({
        clientes
    })
    console.log(clientes);
})
////////////////////////////
//Crear un nuevo cliente
//Rutas:POST localhost:3000
////////////////////////////

routes.post('/', async (req, res) => {

    const newcliente = new Cliente({
        NomCli: req.body.NomCli,
        ApeCli: req.body.ApeCli,
        TipPre: req.body.TipPre,
        DesPre: req.body.DesPre,
        TelCli:req.body.TelCli,
        BusCli: req.body.BusCli,
        CinCLi: req.body.CinCLi,
        PriCadCli: req.body.PriCadCli,
        SegCadCli: req.body.SegCadCli,
        TllDelCli: req.body.TllDelCli,
        CosCLi: req.body.CosCLi,
        SisCli: req.body.SisCli,
        EspCli: req.body.EspCli,
        HmbCli: req.body.HmbCli,
        SepBusCli: req.body.SepBusCli,
        AltBusCli: req.body.AltBusCli,
        EspEscCli: req.body.EspEscCli,
        DelEscCLi: req.body.DelEscCLi,
        LarFalCLi: req.body.LarFalCLi,
        RueCli: req.body.RueCli,
        ManCli: req.body.ManCli
    })

    await newcliente.save();
    console.log(newcliente);
    res.status(200).json({
        messague: "cliente creados satisfactoriamnete",
        newcliente
    })
})




////////////////////////////
//Obtener uno
//Rutas:GET localhost:3000/:id
////////////////////////////

routes.get('/:id', async (req, res) => {

    console.log(req.params.id);
    const cliente = await Cliente.findById(req.params.id);
    res.json({
        messague: "cliente solicitado satisfactoriamnete",
        cliente
    })

})

////////////////////////////
//Eliminar UNo
//Rutas:DELETE localhost:3000/:id
////////////////////////////
routes.delete('/:id', async (req, res) => {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    res.status(200).json({
        messague: "el cliente fue eliminado",
        clienteEliminado
    })
})


////////////////////////////
//Actualizar
//Rutas:PUT localhost:3000/update/:id
////////////////////////////
routes.put('/update/:id', async (req, res) => {
    const clineteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
        messague:"el clinete fue actualizado",
        clineteActualizado
    })
})





//exportando rutas
module.exports = routes