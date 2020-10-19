
var tiempoActual;
var tiempoMonitor;
var tiempoAlarma;


//Sonida de la alarma
var sound = new Audio("AlarmaSound/church_bells_01.mp3");

/*Hace una llamada y devuelve a un referente (elemento) por su "id".
Manipula u obtene informacion*/

var tiempoMonitor= document.getElementById("clock");

var currentTime = setInterval(function()(
var date = new Date();

var horas= (date.getHours()));

