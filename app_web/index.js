/* Archivo Javascript para añadir filas en la tabla */
/* Inicializacion de variable*/
var database = firebase.database();
/* Referencia al cuerpo de la tabla */
const alarmContainer =document.getElementById("tbody");

/* Referencia a la coleccion de firebase*/
let ref = database.ref("tasks");

ref.on("value", gotData, errData);
/* Metodo de response */
function gotData(data){
    alarmContainer.innerHTML=``;
    x = data.val();
    count=1;
    value=true;
    /* Iteracion para añadir filas a la tabla */
    for (n in x){
        dato= x[n]
        if(value){
            alarmContainer.innerHTML+=`<tr class="table-active">
                <td scope="row">${count}</td>
                <td scope="row">${dato.fecha}</td>
                <td scope="row">${dato.hora}</td>
                <td scope="row"> <img src="data:image/jpeg;base64,${dato.imagen}" width="200" 
                height="200" alt=""></td>
            </tr>`
            value=false;
        }else{
            alarmContainer.innerHTML+=`<tr class="table-primary">
                <td scope="row">${count}</td>
                <td scope="row">${dato.fecha}</td>
                <td scope="row">${dato.hora}</td>
                <td scope="row"> <img src="data:image/jpeg;base64,${dato.imagen}" width="200" 
                height="200" alt=""></td>
            </tr>`
            value=true;
        }
    count+=1;
    }
}
/* Metodo para determinar los errores a la conexion con Firebase */
function errData(err){
    console.log("Error");
    console.log(err);
}