const lista1 = [
    100,
    200,
    300,
    500,
];

//PROMEDIO
function calcularMedia(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){

    // sumaLista = sumaLista + lista[i];

    // }
     const sumaLista = lista.reduce( //Metodo reduce para arrays
         function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
         }
     );

    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
};

//////////////////----------------/////////////

//MEDIANA
const lista2 = [];


lista2.sort(function(a,b){return a-b});//Sort ordena listas, y la funcion ordena listas numericas identificando los numeros mayores

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
};

let mediana;

if (esPar(lista2.length)){
    const elemento1 = lista2[mitadLista2];
    const elemento2 = lista2[mitadLista2-1];

    const promedio = calcularMedia([elemento1,elemento2]);
    media = promedio;

}else{
    mediana = lista2[mitadLista2];
}

///////////------------/////////
//MODA

const lista3 = [1,2,3,6,3,7,3,1,7,4,4,2,7,8,7];

const listaCount = {};

lista3.map(
    function(elemento){

        if(listaCount[elemento]){
            listaCount[elemento] +=1;
        }else{
            listaCount[elemento] = 1;
        }

    }
);

const listaArray = Object.entries(listaCount).sort(
    function(a,b){
        return a[1] - b[1];
    }
);

const moda = listaArray[listaArray.length - 1];
