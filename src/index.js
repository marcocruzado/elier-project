//aca solo requerimos eh inicalizamos 
const app = require('./app')

//requiriendo la base de datos
require('./bd');

const d=(new Date());



//iniciaremos el servidor
app.listen(app.get('port'))
console.log("inicializando ELLIER Server... " ,app.get('port'));
