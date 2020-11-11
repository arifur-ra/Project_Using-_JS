/**
 * Money until rest of the week calculator
Write a function that calculates how much money someone is going to earn 
until the end of the week by just accepting a number from 1 to 7 that represents the days of the week. 
(1 is for Monday, 2 for Tuesday, etc 7 is for Sunday).
Given someone earns 10$ per hour and his working schedule is this:

Monday: works 4 hours
Tuesday: works 6 hours
Wednesday: works 8 hours
Thursday: works 10 hours 
Saturday: works 2 hours
Fridays and Sundays can have his days-off.
For example: if we execute calculateRestOfWeekMoney(3) 
The number 3 is passed as argument indicates that today is Wednesday so we 
calculate from Wednesday (included) until sunday.
 */

function earningMoneyInWeek(days) {
    let hours = 10;
    if (days == 1) {
        return `Monday:You will earning rest of the week :${(hours*4)+(hours*6)+(hours*8)+(hours*10)+(hours*2)}$`;
    } else if (days == 2) {
        return `Tuesday: You will earning rest of the week:${(hours*6)+(hours*8)+(hours*10)+(hours*2)}$`;
    } else if (days == 3) {
        return ` Wednesday:  You will earning rest of the week:${(hours*8)+(hours*10)+(hours*2)}$`;
    } else if (days == 4) {
        return ` Thursday: You will earning rest of the week:${(hours*10)+(hours*2)}$`;
    } else if (days == 5) {
        return ` Friday: You will earning rest of the week${hours*2}$`;
    } else if (days == 6) {
        return ` Saturday: You will earning rest of the week:${hours*2}$`;
    } else if (days == 7) {
        return ` Sunday:day Off!. You will not earning this week`;
    }
}
//document.write(`<h1>${earningMoneyInWeek(3)}<h1>`);

let displayResult = document.getElementById('displayResult');

function clickForResult() {
    let days = document.getElementById('weekday').value;
    displayResult.innerHTML = earningMoneyInWeek(days);

}