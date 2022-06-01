//Helpers
function esPar(numero){
    return (numero % 2 == 0);
}

function calcularMedia(lista){
     const sumaLista = lista.reduce( //Metodo reduce para arrays
         function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
         }
     );

    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
};

//Calculadora de Medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMedia([personaMitad1,personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


// Mediana Top 10

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});