## DOM Manipulation
- We use [DOM methods](https://www.w3schools.com/js/js_htmldom_methods.asp) to add interactivity to your web page
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

## Operations and Methods
From here, we will learn approaches to manipulate the DOM elements
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
