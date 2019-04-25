"use stritch"
//*Завдання 1
var now = new Date();
var tommorow = new Date (now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0 );
var result = (tommorow - now) / 60000;
console.log('До конца текущего дня: ' + Math.floor(result) + ' min');

//*Завдання 2
var now = new Date();
var startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0 );
var result = -(startDay - now) / 1000;
console.log('Секунд прошло с начала текущего дня: ' + Math.floor(result) + ' sec');

//*Завдання 3
var date = new Date(2013, 0, 25);
var days = ['ндеділля', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
var day = date.getDay();
console.log(days[day]);