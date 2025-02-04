## DOM Manipulation
We use [DOM methods](https://www.w3schools.com/js/js_htmldom_methods.asp) to add interactivity to your web page

## [Node Tree](https://www.w3schools.com/js/js_htmldom_navigation.asp)
- Node tree represents the HTML structure
- Everything in a HTML document is a node (text inside HTML elements are text nodes!)
  
  ![pic_htmltree](https://github.com/user-attachments/assets/89272224-4ec8-4ea5-bd61-9e4ec7dd710e)
- The nodes in the node tree have a hierarchical relationship to each other.
- The terms parent, child, and sibling are used to describe the relationships.

  ![pic_navigate](https://github.com/user-attachments/assets/cfb502b2-03fe-4cfb-96d2-3317ed51c975)

- You can use the following node properties to navigate between nodes with JavaScript:
  - ```parentNode```
  - ```childNodes[nodenumber]```
  - ```firstChild```
  - ```lastChild```
  - ```nextSibling```
  - ```previousSibling```

## Searching for Node
- To do something, we need to select that node first.
- We can use
  - ```document.querySelector(".className" or "#ID" or "tagName")``` - returns the first match
  - ```document.querySelectorAll(".className" or "#ID" or "tagName")``` - returns all matching elements as an array
  - ```document.getElementByID("ID")```
  - ```document.getElementsByClassName("claasName")```
  - ```document.getElementByTagName("tagName")```
 
- After selecting the node, we can access the properties of that node
- For example:
  ``` javascript
  <button id="submit-btn">Submit</button>
  // Create a constant variable to select the button node using ID
  const myButton = document.querySelector("#submit-btn")⑆
  // Access and redefine the property
  myButton.style.backgroundColor = "yellow";
  myButton.style.padding = "10px";
  ```

## Methods
Here we will learn approaches to manipulating the DOM elements
### ```classList``` Property
- ```classList``` property returns a list of all the CSS classes an element contains
- we can use it to change the class of a node (HTML element)
- Adding, Removing, Toggling Classes:
  ``` javascript
  myButton.classList.add("new-class");
  myButton.classList.remove("new-class");
  myButton.classList.toggle("new-class");
  ```

### Modifying Text
- ```innerText``` property allow us to control the contents of the HTML elements.
- ```innerHTML``` lets us control the HTML content directly.
  ```javascript
  const container = document.querySelector("div");
  container.innerText = "A sample text string";
  container.innerHTML = "<h1>Adding Heading with JS</h1>";
  ```

### Updating attributes
- The same way as properties using ```element.attribute```
  ```javascript
  <img src="cat.jpg" id="my-image" />
  const myImage = document.querySelector("#my-image");
  myImage.src = "penguin.jpg"; // updates the src value of the image
  ```

### [Creating new DOM Elements](https://www.w3schools.com/js/js_htmldom_nodes.asp)
- The basic idea is
  - Create the new element (node) using ```document.createElement()```
  - Select an exsiting node which would be the relative position to your new element
  - Put the new element into the node tree using these methods
    - ```insertBefore()```
    - ```append()```
    - ```appendChild()```
    - There are [more methods](https://www.w3schools.com/jsrEF/dom_obj_all.asp)！
   
## [JavaScript Events](https://www.w3schools.com/js/js_htmldom_events.asp)
- A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
  ```html
  <body>

  <h1 onclick="changeText(this)">Click on this text!</h1>

  <script>
  function changeText(id) {
    id.innerHTML = "Ooops!";
  }
  </script>

  </body>
  ```

- Use [Event Listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
  ```javascript
  element.addEventListener("click", myFunction);

  function myFunction() {
    alert ("Hello World!");
  }
  ```  

## Callback Function
https://www.w3schools.com/js/js_callback.asp

## ES6 Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp











