// Ciclo definido FOR
var productos = 5;
for (let contador = 0; contador < productos; contador++) {
    console.log("Producto #: "+contador);    
}

// Ciclos indefinido While
while(productos>0){
    console.log("Producto vendido");
    productos--;
}

// Ciclos indefinido DO While
do{
    console.log("Producto vendido");
    productos--;
}
while(productos>=1)

// Controlar ciclos
var cuenta = 0;
for (let contador = 0; contador <= 20; contador++) {
    if (contador == 5){
        break;
    }
    if (contador % 2 == 0) {
        continue;
    }
    cuenta++;
}
console.log("hay: "+cuenta);