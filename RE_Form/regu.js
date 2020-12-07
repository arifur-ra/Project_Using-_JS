// .............December 07.12..................


const regularExp = (re, str) => {

    if (str.match(re)) {
        return str.match(re);
    }
    return false;

}

let reEx = /\w/g;
let str1 = '!! ';

console.log(regularExp(reEx, str1));



// ..................[][Brackets]....................

let reEx1 = /saf[wu]an/i; //  must be either w or u ;
let str2 = 'Safuan';

console.log(regularExp(reEx1, str2));
//...............................
reEx1 = /[Gg]ermany/;
str2 = 'Germany';
console.log(regularExp(reEx1, str2));

//using  Whole Alphabet for regular Expression

reEx1 = /^[A-Za-z]+$/;
str2 = 'FbW';

console.log('Whole Alphabet', regularExp(reEx1, str2));


//........Exercise...........

const regularExp1 = (re, str) => {

    if (str.match(re)) {
        return true;
    }
    return false;

};

reEx1 = /^[A-Z]+/mg;
str2 = 'FbW \nIs \nthe est';
console.log('New Line should be Capital Letter', regularExp1(reEx1, str2));


//.....Quantifiers....... Braces{}  [Brackets].Parentheses()..



// ......Braces{}:..
// if i want to some character repeated

reEx1 = /Hel{2}o+/i; // must be 2 times l not less or grater
str2 = 'hello';
console.log('Braces{}:', regularExp1(reEx1, str2));

// At least occur m times

reEx1 = /Yaho{2,}!!/i; // at least 2 times {o}, can be more then 2;
str2 = 'Yahooooo!!';
console.log('Quantifiers:', regularExp1(reEx1, str2));

// range of occurences
reEx1 = /Yaho{2,5}!!/i; // at least 2 times {o}, and maximum 5;
str2 = 'Yahoooooo!!';
console.log('Quantifiers:', regularExp1(reEx1, str2));

//........... Exercise................

// checks that every new line starts with number of '-' between 2,5

const regularExp2 = (re, str) => {

    if (str.match(re)) {
        return str.match(re);
    }
    return str.match(re);

};

reEx1 = /^-{2,5}/mg;
str2 = '--FbW \n--Is \n-----the \n-est';
console.log('New Line should be 2 dass(--)', regularExp2(reEx1, str2));


//.........Parentheses().........

reEx1 = /^([0-9]x){2}$/mg;
str2 = '3x3x';
console.log('Parentheses():', regularExp2(reEx1, str2));


// ........Assertions:..................

//reEx1 = /X(?=Y)/ig; // Match only if x followed by
reEx1 = /x(?!=y)/ig; // Match only if x followed by

str2 = 'xyz are used for math and x is the best,x is my';
console.log('Assertions:', regularExp2(reEx1, str2));