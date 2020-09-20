
//Declaración de las variables a utilizar

//Captura de la cantidad de notas que se ingresarán
var num = parseInt(prompt("¿ Ingrese un numero entero?",""));
//Definiendo un valor de inicialización para la variable que almacenará el promedio
var Dig=(Math.max(Math.floor(Math.log10(Math.abs(num))), 0)+1) ;
var i=1
var max,min,contimp=0,contpar=0,sum=0,sumpar=0,sumimpar=0;
var digits = [];
while (num > 0) {
    digits.push(num % 10);
    num = parseInt(num / 10);
}
digits.reverse();
for(i=0;i<Dig;i++){
    sum=sum+digits[i]
}
for(i=0;i<Dig;i++){
    if(digits[i]% 2==0){
        contpar++;
        sumpar=sumpar+digits[i];
    }
    else{
        contimp++
        sumimpar=sumimpar+digits[i];
    }
}

max= Math.max.apply(null, digits); 
min=Math.min.apply(null, digits); 

document.write("<header><h1>Calculo de Número Entero</h1><hr /><br /></header>");
//Ciclo o lazo que permitirá ingresar cada nota

document.write("<h3> El numero tiene : " +Dig +" Digitos </h3>");
document.write("<h3> El numero tiene : " +digits +" Digitos </h3>");
document.write("<h3> hay :"+contpar+" de numeros pares </h3>");
document.write("<h3> hay :"+contimp+" de numeros impares </h3>");
document.write("<h3> la suma total de los digitos es:"+sum+" </h3>");
document.write("<h3> la suma de los Digitos pares es:"+sumpar+" </h3>");
document.write("<h3> la suma de los digitos Impares es::"+sumimpar+" </h3>");
document.write("<h3> el Mayor digito es:"+max+" </h3>");
document.write("<h3> el menor digito es:"+min+" </h3>");
//Obteniendo el cálculo del promedio

