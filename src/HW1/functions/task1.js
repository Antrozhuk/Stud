'use strict'
function getWeekDay(day){
    let days=['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
    return days[day.getDay()];
}
describe("task1",function(){
    let date1=new Date(2019, 4, 18);
    it("2019, 4, 18 Суббота",function(){
        assert.equal(getWeekDay(date1),'Суббота')
    })
    let date2=new Date(2019, 4, 16);
    it("2019, 4, 16 Четверг",function(){
        assert.equal(getWeekDay(date2),'Четверг')
    })
    let date3=new Date(2019, 4, 14);
    it("2019, 4, 14 Вторник",function(){
        assert.equal(getWeekDay(date3),'Вторник')
    })
})