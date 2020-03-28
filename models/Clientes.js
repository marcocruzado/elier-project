const {Schema,model}=require('mongoose');


const clienteSchema=new Schema({
    NomCli:{type:String},
    ApeCli:{type:String},
    TipPre:{type:String},
    DesPre:{type:String},
    TelCli:{type:Number},
    BusCli:{type:Number},
    CinCLi:{type:Number},
    PriCadCli:{type:Number},
    SegCadCli:{type:Number},
    TllDelCli:{type:Number},
    CosCLi:{type:Number},
    SisCli:{type:Number},
    EspCli:{type:Number},
    HmbCli:{type:Number},
    SepBusCli:{type:Number},
    AltBusCli:{type:Number},
    EspEscCli:{type:Number},
    DelEscCLi:{type:Number},
    LarFalCLi:{type:Number},
    RueCli:{type:Number},
    ManCli:{type:Number},
    CreadoEn:{type:Date,
    default:Date(Date.now()).toString()}
})


module.exports= model('Cliente',clienteSchema);