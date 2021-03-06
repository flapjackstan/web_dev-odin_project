## What are the main differences between external, internal, and inline CSS?
External css is a file saved outside the html file that is imported, internal has a style tag saved inside of the head tag with css values, inline is css values written inside of the html elements. 
Order of execution for these css methods are

1. inline
2. internal
3. external 

## What is the syntax for class and ID selectors?
`.class` 

`#id`

## How would you apply a single rule to two different selectors?
I would either use the same class on them or group them together like this.

```
.class1,
.class2 {
    color: red
}
```

## Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?

I would use the class selector chained with the id. Generally i would want to go from less specific class to id

```
.primary#title {
    color: blue
}
```

## What does the descendant combinator do?

It selects elements that meet the criteria for selection based on whether or not it has certain parents. The below would select elements with class content that has an ancestor with class ancestor

```
.ancestor .contents {
  /* some declarations */
}
```

## Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

The class selector would take precedence

## How do you select a specific element on your page with your browser’s developer tools?
Right click and select inspect. This brings up the selection in the elements in dev tools

## What does a strikethrough in a CSS element mean in your browser’s developer tools?
It means it is over ridden by some other css rule

## How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?
You can add an inline style by adding it into the `element.style` section. Or you can add in a new style rule and apply it. Or you can add a new class in the `.cls` section.

## From inside to outside, what is the order of box-model properties?
From inside to outside - padding, border, margin

## What does the box-sizing CSS property do?
box sizing tells the browser to use a different version of the box model that does not add border and padding on top of the width and heigh, but instead uses the width and height as the maximum value of the entire element

## What is the difference between the standard and alternative box model?
The alternative box model asssigns padding and border within the total width and height assigned. 

Original Example

```
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```
The actual space taken up by the box will be 410px wide (350 + 25 + 25 + 5 + 5) and 210px high (150 + 25 + 25 + 5 + 5).

![standard](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/standard-box-model.png)

Where as using the alternative would stuff the border and padding within the width and height
```
.box {
  box-sizing: border-box;
}
```
![alternative](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/alternate-box-model.png)

## Would you use margin or padding to create more space between 2 elements?
Margin

## Would you use margin or padding to create more space between the contents of an element and its border?
Padding

## Would you use margin or padding if you wanted two elements to overlap each other?
Margin

## What is the difference between a block element and an inline element?
Block elements stack on top of each other and expand to the max amount of the screen and break at new lines, inline ones only take up the space it needs. 

Examples of inline elements are `<span>` and `<a>` tags. `<divs>` and `<p>` are block tags

## What is the difference between an inline element and an inline-block element?
Inline elements dont have width and height properties and can overlap other pieces of the element it is embedded in, whereas inline-block elements do have width and height properties and can be styled to not overlap the elements they are embedded in 

## Is an h1 block or inline?
Block

## Is button block or inline?
Inline

## Is div block or inline?
Block

## Is span block or inline?
Inline