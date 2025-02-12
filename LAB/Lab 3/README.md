## SASS - CSS Preprocessors
- SASS will automatically compile your ```.scss``` file to ```.css``` file
- So just link your ```.css``` with HTML file

## Sass Varaiables
- Sytax: ```$variablename: value;```
- Use it to predefine your styles, then calling it using ```$variablename```
  ```css
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


















