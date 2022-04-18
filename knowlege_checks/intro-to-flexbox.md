## What’s the difference between a flex container and a flex item?
a flex container holds flex items. However flex items can also hold containers. flex containers have the css property of `display: flex`

## How do you create a flex item?
you create a flex container and add a flex property in the element/s inside of it

## What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?
grow, shrink, basis


## How do you make flex items arrange themselves vertically instead of horizontally?
you set the flex direction property to row for vertical and column for horizontally

## In a column flex-container, what does flex-basis refer to?
height

## In a row flex-container, what does flex-basis refer to?
width

## Why do the previous two questions have different answers?
they are different based on what the flex direction is oriented to


## What is the difference between justify-content and align-items?
Justify content changes how dispersed content should be from one another on the main axis, whereas allign items changes where thay are in the cross axis

## How do you use flexbox to completely center a div inside a flex container?
you would use 

```
justify-content: center;
align-content: center;    
```

## What’s the difference between justify-content: space-between and justify-content: space-around?
space between measures the space between content, whereas space around does both between content as well as out.





