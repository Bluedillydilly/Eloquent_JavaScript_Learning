var a = 9.81; // a = 9.81
var b = 2.998e8; // b = 2.998 x 10^8
var c = 100 + 4 * 11;
var d = Infinity;
var e = NaN;
e = undefined;
e = null;
a = `Down`;
b = "By";
c = 'The';
d = "con" + "cat" + "e" + "nate";
f = `half of ${ 100 } is ${ 100 / 2 }`;
const foo = 200;
// foo = "apple"; // can't reassign
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) 
{
    console.log("Your number is the square root of " + theNumber * theNumber);
}
let num = Number(prompt("Sum of 1 to N. N ="));
while (Number.isNaN(num))
{
    num = Number(prompt("HEY! Sum of 1 to N. N ="));
}
console.log("Sum of 1 to ", num, ":", num * (num+1) / 2 );

// Pyramid of '#'s
let i = 0;
let row = "";
for (i = 0; i < 7; i++)
{
    row += "#";
    console.log(row);
}

// FIZZBUZZ
// print nums 1->100
// if divs by 3, print "Fizz"
// if divs by 5 and not 3, print "Buzz"
delete num;
let num;
for ( num = 1; num <= 100; num++ )
{
    if (num % 3 == 0 && num % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else if ( num % 3 == 0 )
    {
        console.log("Fizz");
    }
    else if ( num % 5 == 0 )
    {
        console.log("Buzz");
    }
    else 
    {
        console.log( num );
    }
}

// CHESSBOARD
let size = 8
let firstRow = " #".repeat(size/2);
let secondRow = "# ".repeat(size/2);
let row = 0;
for (row; row < size; row += 2)
{
    console.log(firstRow);
    console.log(secondRow);
}

const square = function(x) {
    return x * x;
};

function power(base, exponent = 2) 
{
    let result = 1;
    for (let count = 0; count < exponent; count++)
    {
        result *= base;
    }
    return result;
}
console.log(power(4));

function square(x) 
{ 
    return x * x; 
}
// ignores extra parameter
console.log(square(4, true, "hedgehog"));

function minus(a, b) 
{
    if (b === undefined) return -a;
    else return a - b;
}

// CLOSURE
// closure on number
function multiplier(factor) 
{
    
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));

// 2 ARGUMENT FUNCTION
function printFarmInventory(cows, chickens)
{
    let cowString = String(cows);
    while (cowString.length < 3)
    {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens)
    while (chickenString.length < 3)
    {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);


// Min
function min(a, b)
{
    return (a > b ? b : a);
}

// Recursive isEven
function isEven(n)
{
    switch (n) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEven(n - Math.sign(n)*2 );        
    }
}

// BEAN COUNTING
// COUNT 'B's IN STRING
let countBs = (string) => {
    Bcount = 0;
    stringLength = string.length;
    for (let i = 0; i < stringLength; i++ )
    {
        if (string[i] == "B")
        {
            Bcount++;
        }
    } 
    return Bcount;
};

function countChar(string, char)
{
    charCount = 0;
    stringLength = string.length;
    for (let i = 0; i < stringLength; i++ )
    {
        if (string[i] == char)
        {
            charCount++;
        }
    } 
    return charCount;
}

countBs = (string) => {return countChar(string, "B");};