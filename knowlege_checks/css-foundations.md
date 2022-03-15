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
