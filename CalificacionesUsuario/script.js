const calificaciones = [];
let cantMaterias = 2;

for(let i = 0; i < cantMaterias; i++){
    const nombreMateria = prompt('Ingrese el nombre de la materia');
    const calificacionMateria = prompt ('Ingrese la calificación obtenida')
    calificaciones.push({
        nombreMateria: nombreMateria,
        calificacion: calificacionMateria,
    })
}
console.log(calificaciones);

 let suma = 0;
 let promedio;

 calificaciones.forEach(calificacion => {
    suma += parseInt(calificacion.calificacion);
 })
 promedio = suma / calificaciones.length;
 console.log ('El promedio de sus calificaciones es: ' + promedio);
 
//  for(let i = 0; i < calificaciones.length; i++){
//      let nota = parseInt(calificaciones[i].calificacion);
//      suma = suma + nota;
//   }
//   promedio = suma / cantMaterias;
// console.log('El promedio de sus calificaciones es: ' + promedio);


const calificacionesNuevas = [];

for(let i = 0; i < calificaciones.length; i++){

    if (calificaciones[i].calificacion >= 3){
        calificacionesNuevas.push(calificaciones[i]);
    }
}
console.log(calificacionesNuevas);

let sumaNueva = 0;
let promedioNuevo;
calificacionesNuevas.forEach(calificacionN => {
    sumaNueva += parseInt(calificacionN.calificacion);
})
promedioNuevo = sumaNueva / calificacionesNuevas.length;
console.log ('El nuevo promedio de sus calificaciones es: ' + promedioNuevo);







