(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var div_segundos = document.querySelector(".seg");
var div_minutos = document.querySelector(".min");
var div_horas = document.querySelector(".hrs");
setInterval(setDate, 1000);
function setDate() {
    var now = new Date();
    var segundos = now.getSeconds();
    var minutos = now.getMinutes();
    var horas = now.getHours();
    var segundos_grados = segundos * 6 - 90;
    var minutos_grados = minutos * 6 - 90;
    if (horas >= 13) {
        horas = horas - 12;
    }
    var horas_grados = horas * 30 - 90;
    console.log("segundos: " + segundos);
    console.log("minutos: " + minutos);
    console.log("horas: " + horas);
    div_segundos.style.transform = "rotate(" + segundos_grados + "deg)";
    div_minutos.style.transform = "rotate(" + minutos_grados + "deg)";
    div_horas.style.transform = "rotate(" + horas_grados + "deg)";
}

},{}]},{},[1])

//# sourceMappingURL=main.js.map
