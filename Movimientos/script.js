const cant = parseInt(prompt('Ingrese la cantidad de veces que desea ingresar la información de movimientos'));

const movimientos =[ ];

for(let i = 0; i < cant; i++){

    const fecha = prompt('Ingresa la fecha');
    const tipoMovimiento = prompt('Ingrese el tipo de movimiento si es Ingreso o egreso');
    const valor = prompt('Ingrese el valor del movimiento');
    movimientos.push({
         fecha: fecha,
         tipoMovimiento: tipoMovimiento,
         valor: valor,
    });
 }
 console.log(movimientos);

 let cantIngreso = 0;
 let cantEgresos = 0;

movimientos.forEach(element => {
    if(element.tipoMovimiento == 'ingreso'){
        cantIngreso = cantIngreso + 1;
    }else{
        cantEgresos = cantEgresos + 1;
    }
});

 console.log('La cantidad de ingresos son: '+ cantIngreso);
 console.log('La cantidad de egresos son: '+ cantEgresos);