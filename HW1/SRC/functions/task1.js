'use strict'
function getWeekDay(day){
    let days=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return days[day.getDay()];
}
let date=new Date(2019, 4, 18);
console.log(getWeekDay(date));
