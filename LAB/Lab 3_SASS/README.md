## SASS - CSS Preprocessors
- SASS will automatically compile your ```.scss``` file to ```.css``` file
- So just link your ```.css``` with HTML file

## Sass Varaiables
- Sytax: ```$variablename: value;```
- Use it to predefine your styles, then calling it using ```$variablename```
  ```
  $myFont: Helvetica, sans-serif;
  $myColor: red;
  $myFontSize: 18px;
  $myWidth: 680px;

  body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
  }

  #container {
  width: $myWidth;
  }
  ```

## Sass Nesting and Pseudo-classes
- Sass lets you nest CSS selectors in the same way as HTML.
- Pseudo-classes like :hover or :active of the parent elements can be selected using &
  ```
  nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;

    // Pseudo-classes like :hover or :active of the parent elements can be selected using &
    &:hover{
    color:#069c54;
  }
  }
  }
  ```

## Sass @import
- Just like CSS, Sass also supports the @import directive.
- Use it to organise your files!
- Syntax: ```@import filename;```
  ```
  @import "variables";
  @import "colors";
  @import "reset";
  ```

## Sass @mixin and @include
- The @mixin directive lets you create CSS code that is to be reused throughout the website.
  ```
  @mixin name {
  property: value;
  property: value;
  ...
  }
  ```
- The @include directive is created to let you use (include) the mixin.
  ```
  selector {
  @include mixin-name;
  }
  ```

## Sass @extend and Inheritance
- The @extend directive lets you share a set of CSS properties from one selector to another.
- The @extend directive is useful if you have almost identically styled elements that only differ in some small details.
  ```
  .button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  }
 
  .button-report  {
  @extend .button-basic;
  background-color: red;
  }

  .button-submit  {
  @extend .button-basic;
  background-color: green;
  color: white;
  }
  ```
  
  
  














