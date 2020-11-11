/**
Calculate saved money till pension
Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. 
Especially the parameters that should be defined are:
The current age of the person // ex. 40
The pension's age of the person // ex. 60
The monthly wage the person earns // ex. 1000
The percentage (as integer) that the person saves each month // ex. 10%  
If the person has already retired then the message 'Calculate your past memories mate!' should be printed.
If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns 2000$ per month and she saves the 5% of it.
How much money will she have saved until she retires? // This case is 30.000
 */

function calculatePension() {
    let currentAge = document.getElementById('currentAge').value;
    let retiresAge = document.getElementById('retiresAge').value;
    let salary = document.getElementById('salary').value;
    let percent = document.getElementById('percent').value;
    let result = document.getElementById('result');

    result.innerHTML = ` Your Pension saved:${((salary * 12) * (retiresAge - currentAge)) / 100 * percent}`;
    result.style.textAlign = 'center';


}