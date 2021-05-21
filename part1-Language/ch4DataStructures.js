///////////////////////////////////////////////////////
/// Chapter 4 - Data Structures: Objects and Arrays ///
///////////////////////////////////////////////////////


let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);

// SOME ARRAY OPS
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4


// BASIC OBJECT
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

let anObject = {
    left: 1, 
    right: 2
};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

// ???
let j = []

function addEntry (events, squirrel)
{
    j.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running","television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts","beer"], true);

function phi (table)
{
    return (table[3] * table[0] - table[2]*table[1]) /
            Math.sqrt(  (table[2] + table[3]) *
                        (table[0] + table[1]) *
                        (table[1] + table[3]) *
                        (table[0] + table[2]));
}

console.log( phi( [76, 9, 4, 1] ) );

// PRINT EACH ELEMENT IN J
for (let entry of j)
{
    console.log(`${entry.events.length} events.`);
}


function journalEvents(journal) 
{
    let events = [];
    for (let entry of journal) 
    {
        for (let event of entry.events) 
        {
            if (!events.includes(event)) 
            {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(j));
// → ["carrot", "exercise", "weekend", "bread", ...]

for (let event of journalEvents(j)) 
{
    console.log(event + ":", phi(tableFor(event, j)));
}

// RANDOM POINT ON CIRCLE
function randomPointOnCircle(radius) 
{
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}


// EXERCISES

// EXERCISE 1
// Array of elements from start to stop (inclusive)
function range (start, stop, step=1)
{
    let array = []
    for (let i = start; (i <= stop && step > 0) || (i >= stop && step < 0) ; i+= step)
    {
        array.push( i );
    }


    return array;
}
let a  = range(1, 10);
console.log(a);

// Sum of elements in an array
function sum (array)
{
    let sum = 0;
    for (let element of array)
    {
        sum += element;
    }

    return sum;
}
console.log(sum(a));


//EXERCISE 2
// Reverse an array -- creates a new array
function reverseArray (array)
{
    newArray = []
    arrayLength = array.length;
    for(let i = arrayLength - 1; i >= 0; i--)
    {
        newArray.push(array[i]);
    }
    return newArray;
}

// Reverse an array in place
// [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
function reverseArrayInPlace (array)
{
    arrayLength = array.length
    swapCount = Math.floor(arrayLength / 2);
    for(let i = 0; i < swapCount; i++)
    {
        temp = array[i];
        array[i] = array[arrayLength - i - 1];
        array[arrayLength - i - 1] = temp;
    }
}

// EXERCISE 3


// Convert an array to a list
function arrayToList (array)
{
    let list = {value: array[0], rest: null};
    arrayLength = array.length;
    let sublist = list;
    for (let i = 1; i < arrayLength; i++)
    {
        sublist.rest = {value: array[i], rest: null};
        sublist = sublist.rest;
    }

    return list;
}

// Convert a list to an array
function listToArray (list)
{
    let array = [];
    let l = list;
    while (l != null)
    {
        array.push(l.value);
        l = l.rest;
    }

    return array;
}

let list = {
    value: 1, 
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// Add an element to the front of a list
function preprend (element, list)
{
    return {value: element, rest: list};
}

// get the nth element in the list
function nth (list, index)
{
    let l = list;
    for (let i = 0; i != index; i++)
    {
        l = l.rest;
    }
    return l.value;
}

// get the nth element in the list recursively
function nth ({value, rest}, index)
{
    if (index == 0)
    {
        return value;
    }
    else
    {
        return nth(rest, index-1);
    }
}


// EXERCISES 4
// Deep equality check -- check if two objects and their properties are equal
function deepEqual (x, y)
{
    if ( !(typeof x == "object" && x != null) && (typeof y == "object" && y != null) ) // are values
    {
        return x === y;
    }

    // compare property lists
    xProps = Object.keys(x);
    yProps = Object.keys(y);
    if (xProps.length != yProps.length) // check if same count of properties
    {
        return false;
    }
    for (let i = 0; i < xProps.length; i++) // check same property names
    {
        if (xProps[i] != yProps[i])
        {
            return false;
        }
        if (deepEqual(x[xProps[i]], y[xProps[i]]) == false)
        {
            return false;
        }
    }

    return true;
}