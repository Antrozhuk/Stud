'use strict'
function getWeekDay(day){
    let days=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return days[day.getDay()];
}
let date=new Date(prompt('Введите дату',''));
alert(getWeekDay(date));