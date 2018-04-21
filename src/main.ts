const div_segundos:HTMLDivElement = document.querySelector(".seg");
const div_minutos:HTMLDivElement = document.querySelector(".min");
const div_horas:HTMLDivElement = document.querySelector(".hrs");

setInterval(setDate,1000);


function setDate():void{
const now: Date = new Date();
const segundos  =  now.getSeconds();
const minutos =  now.getMinutes();
let horas = now.getHours();
const segundos_grados = (segundos *6) - 90;
const minutos_grados = (minutos *6) - 90;

if(horas >= 13){
    horas = horas -12; 
}


const horas_grados = (horas *30) - 90;


console.log(`segundos: ${segundos}`);
console.log(`minutos: ${minutos}`);
console.log(`horas: ${horas}`);
div_segundos.style.transform = `rotate(${segundos_grados}deg)`;
div_minutos.style.transform = `rotate(${minutos_grados}deg)`;
div_horas.style.transform = `rotate(${horas_grados}deg)`;

}