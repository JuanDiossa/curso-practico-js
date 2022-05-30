//Código del cuadrado
// console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado mieden: " + ladoCuadrado + "cm");
function perimetroCuadrado (lado){
    return lado * 4;
}
// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
    return lado * lado;
} 
// console.log("el áre del cuadrado es: " + areaCuadrado + "cm2");
// console.groupEnd();
//Código del Triángulo
// console.group("triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)
// console.log(`La atura del triangulo es ${alturaTriangulo}cm`)
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}  
// console.log(`el perimetro del triangulo es ${perimetroTriangulo}cm`);
function areaTriangulo(base,altura){
    return (base * altura) / 2;
} 
// console.log(`el área del triangulo es ${areaTriangulo}cm2`);
// console.groupEnd();
//Código del Círculo
// console.group("Circulo");
// const radio = 4;
// console.log(`el radio del circulo es: ${radio}cm`);
function diametroCirulo(radio){
    return  radio * 2;
}
// const diametro =
// console.log(`el diametro del circulo es: ${diametro}cm`);
const PI = Math.PI;
// console.log(`PI es: ${PI}`);
function perimetro(radio){
    const diametro = diametroCirulo(radio) 
    return diametro * PI;
} 
// console.log(`el perimetro del circulo es: ${perimetro}cm`);
function areaCirculo(radio){
    return (radio * radio) * PI;
} 
// console.log(`el area del circulo es: ${areaCirculo}cm2`);
// console.groupEnd();

//Aqui intereactuamos con el HTML
function calcularPerimetro(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`el perimetro es ${perimetro}cm`);
}

function calcularArea(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(`el área es ${area}cm^2`);
}

function calcularAlturaTriangulo(lado1, lado2, base){
    if(lado1 != lado2){
        alert("No es un tríangulo isóceles");
    }else{
        const raizAltura = (lado1*lado2)-(base*base)/4;
        const resultado = Math.sqrt(raizAltura);
        alert(`La atura del triangulo isoceles es ${resultado}`);
    }
    

}