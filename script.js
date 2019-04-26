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

//*Завдання 4

var date = new Date();
var age = new Date(prompt('введите свой день рождения', '1990-10-01'));
var time = new Date(date.getFullYear(), age.getMonth(), age.getDate(), 0,0,0);
var result = date.getTime() - time.getTime();
result = Math.round(result / (1000 * 60 * 60 * 24));

if(result < 0){
	var birthDay = 365 + result;
	alert('До Вашого дня народження залишилось: ' + birthDay + ' днів!')
}else if(result > 0){
	alert('До Вашого дня народження залишилось: ' + result + ' днів!')
}else if(result == 0)
	{alert( 'З днем народження!' )
}else( alert('Не вірний формат вводу') );

