const mongoose = require('mongoose');

host='localhost'
bd='ClientesElier2'

mongoose.connect(`mongodb://${host}/${bd}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err,docs)=>{
    if(!err){
        console.log(`la base de datos ${bd} esta conectada`)
    }
    else{
        console.log(`error al conerctarse con...  ${bd}`,JSON.stringify(err,undefined,2));
    }
})

module.exports=mongoose;