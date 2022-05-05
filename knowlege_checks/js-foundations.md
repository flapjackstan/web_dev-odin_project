## Name the three ways to declare a variable?
let, consts and var

## Which of the three variable declarations should you avoid and why?
Avoid var and use let. var has no block scope

```
if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if and for blocks

-----------------------------

if (true) {
  let test = true; // use "let"
}

alert(test); // ReferenceError: test is not defined

```

## What rules should you follow when naming variables?
Have them be human readable

## What should you look out for when using the + operator with numbers and strings?
If sting is present, it concatenates them

## How does the % operator work?
It is a modulo, it return the remainder of a division of numbers

6%4 = 2 because 4 divides into 6 once and there is a remainder of 2
6%5 = 1 because 5 divides into 5 once and there is a remainder of 2

2%9 = 2 because if the number being divided is smaller that denominator it returns it self


## Explain the difference between == and ===.

== checks for content
=== checks for content and data type

"5" == 5 True
"5" ===5 False

## When would you receive a NaN result?

When using math operations with numbers and strings

## How do you increment and decrement a number?

++ or -- to increment by one

## Explain the difference between prefixing and post-fixing increment/decrement operators.

prefix increment retruns the incremented number whereas post requires a line for itself to run correctly, if not it prematurely returns

## What is operator precedence and how is it handled in JS?
its kind of like pemdas where a line of code will evaluate certain operations first

## How do you access developer tools and the console?
f12

## How do you log information to the console?
console.log

## What does unary plus operator do to string representations of integers?
casts string of numeric to actual numeric


## What are the eight data types in JavaScript?
number, bigint, string boolean, null, undefined, object, symbol

## Which data type is NOT primitive?
Everything except objects

## What is the relationship between null and undefined?
null is empty or nothing where as endefines is inassigned

## What is the difference between single, double, and backtick quotes for strings?
single lets you use double inside and vice versa and backquotes are template strings

## What is the term for embedding variables/expressions in a string?
string templating

## Which type of quote lets you embed variables/expressions in a string?
``

## How do you embed variables/expressions in a string?
\${variable}

## How do you escape characters in a string?
\

## What is the difference between the slice/substring/substr string methods?
slice uses index start and end, substr uses index start and count to go forward, substring start and end values less than 0 are treated as 0

## What are the three logical operators and what do they stand for?
AND OR NOT

## What are the comparison operators?
<, <=, >=, ==, ===

## What are truthy and falsy values?

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.


## What are the falsy values in JavaScript?
A number 0, an empty string "", null, undefined, and NaN all become false.

## What are conditionals?
they help you direct code to a specific way

## What is the syntax for an if/else conditional?
```
if(){
  //do stuff
}else{
  // do this instead
}
```

## What is the syntax for a switch statement?
```
switch(var){
  case var < 18:
    console.log("too young for drinking")
    break;
  case var > 18:
    console.log("can drink")
    break;
  case var > 90:
    console.log("you sure you wanna drink?")
    break;
  default:
    console.log("error")
}
```

## What is the syntax for a ternary operator?
`(conditional) ? console.log("this is true!") : console.log("this is false")`

## What is nesting?
putting if else statements within one another
```
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}

```