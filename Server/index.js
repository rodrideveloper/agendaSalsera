
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

const jsonfile = require('jsonfile')
const congresosFile = 'congresos.json'
let congresosLista

app.get('/', function (req, res) {
  res.send('Hello World!');
});



//Busca todos los congresos y se queda con los solicitados.
app.get('/congresosAjax', function (req, res) { 

	 var  eventosPedidos=new Array();
     var lugar=req.query.lugar;
       //Agregar lowerCase   
   
	jsonfile.readFile(congresosFile, function (err, obj) {
			
  		if (err) console.error(err)    		
  		congresosLista=obj[0].congresos.datos;
  			
  	//Recorro lista de eventos y los agrego a un array. 	
  		congresosLista.forEach(function(element) {
  			if (lugar==element.ciudad){  	
  				eventosPedidos.push(element);  					
  			}
  		})
  		//El metodo es Asincronico, por eso dejo el response dentro de la funcion.
  		res.json(eventosPedidos);	
    		
 	})


});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
