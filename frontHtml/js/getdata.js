	
	/*const url='http://localhost:3000/congresos'
    let congresos
	fetch(url).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
     //congresos=JSON.stringify(myJson);
    congresos=myJson[0].congresos.datos
    listaCongresos(congresos)


 });

 
  function listaCongresos(data){
  	Object.keys(data).forEach(function(key) {
  	console.log('Key : ' + key + ', Value : ' + data[key].nombre)
  	let p=document.createElement("P");
  	let txt=document.createTextNode(data[key].nombre);
  	p.appendChild(txt);
  	document.getElementById("div1").appendChild(p);
	})
}

function listaCongresos(data){   
     showContent(data)  
}

function showContent(myArr) {
  var temp, item, a, i, clon;
  // Get the template element:
   temp = document.getElementsByTagName("template");
 clon = temp.cloneNode(true);
  for (i = 0; i < myArr.length; i++) {
    console.log(temp);
   
    nombreCongreso=clon.getElementById("nombreCongreso")   
    // Add data from the array:
    nombreCongreso.textContent += myArr[i].nombre;
    // Append the new node wherever you like:
    document.getElementById("nombreCongreso").appendChild(clon)
  }
}
