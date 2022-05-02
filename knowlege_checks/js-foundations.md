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

