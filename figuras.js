//Código del cuadrado
console.group("cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado mieden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el áre del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del Triángulo
console.group("triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`)
console.log(`La atura del triangulo es ${alturaTriangulo}cm`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`el perimetro del triangulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`el área del triangulo es ${areaTriangulo}cm2`);

console.groupEnd();


//Código del Círculo
console.group("Circulo");

const radio = 4;
console.log(`el radio del circulo es: ${radio}cm`);
const diametro = radio * 2;
console.log(`el diametro del circulo es: ${diametro}cm`);
const PI = Math.PI;
console.log(`PI es: ${PI}`);
const perimetro = diametro * PI;
console.log(`el perimetro del circulo es: ${perimetro}cm`);
const areaCirculo = (radio * radio) * PI;
console.log(`el area del circulo es: ${areaCirculo}cm2`);

console.groupEnd();

