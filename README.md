Project\
arrow function\
prototype\
ParentNode.append VS Node.appendChild()\
Custom Range Slider\
Redo JavaScript Progress Bar\
The oninput event occurs when an element gets user input.\
This event occurs when the value of an <input> or <textarea> element is changed.\
To make sure that you use browser that supports fat arrow.\
You want to use strict mode not only because you want to throw errors when you don't define a variable or things like that, but also you want to tell the browser to use the latest functionality.\
THe Arrow function does not have its own 'this', which means it's going to use its parents 'this'. (= It uses 'this' from the code that contains the Arrow Function.) \
splice:adds/removes items to/from an array, returns the removed item(s), changes the existing array; <b>Array method</b>\
slice:returns the extracted parts(selected elements in an array).The original array/string will not be changed. <b>Syntax: array.slice(start, end) / string.slice(start, end)</b>\
The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.\
The :nth-child(n) selector matches every element that is the nth child, regardless of type, of its parent.\
The :nth-of-type() CSS pseudo-class matches elements of a given type, based on their position among a group of siblings.\
The :nth-of-type(n) selector matches every element that is the nth child, of a particular type, of its parent.\
(the index of the first child is 1)<br />
text-decoration:line-through\
tagName: A String, return the tag name of the element in uppercase\
You can use className and classList to add a class to an element, however classList has several methods: add,remove,toggle,contain... \
CSS border-radius: The four values for each radius are given in the order top-left, top-right, bottom-right, bottom-left. \
CSS box-shadow 11/05\
rotate(): rotates the element clockwise from its current position.\
The transform-style property specifies how child elements are rendered in 3D space.The transform-style property must be used together with the transform property. transform-style: flat | preserve-3d | initial | inherit;\
The perspective property is used to give a 3D-positioned element some perspective. When defining the perspective property for an element, it is the CHILD elements that get the perspective view, NOT the element itself.\
css backface-visibility: the property defines whether or not the back face of an element should be visible when facing the user.\
This property is useful when an element is rotated. It lets you choose if the user should see the back face or not.\
The text-decoration property is mostly used to remove underlines from links. |||| css outline \
If you want to add style to a hr tag, you need to add the color/width/style using border property.<hr/>
The mix-blend-mode property specifies how an element's content should blend with its direct parent background.\
Math.floor(x) returns the value of x rounded down to its nearest integer;Math.round(x) returns the value of x rounded to its nearest greater integer.\
ES6 will almost certainly not cover syntax for defining class variables. Only methods and getters/setters can be defined using the class syntax. \
points="100,10 40,198 190,78 10,78 160,198" This is five "corners" starting at (100,10), with a line from there to (40, 198) and so on. The final point joins the first point to make a closed polygon. Each point is separated by space, the comma used to seperate the x and y coordinates of each point.\
string.replace(searchvalue, newvalue)\
The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element. \
<hr/>
var a = 'foo';var b={a}; // b={a:'foo'}\
  b.a==={a}.a // true\
however if just {a}.a, it shows a syntax error, fix it by ({a}).a\
  <b>Object.assign(target, ...sources)</b> This method has a flaw that it only does a shallow copy. It means that nested properties are still going to be copied by reference. Be careful about it.\
  <b>obj.hasOwnProperty(prop)</b>\
  Use for…of to iterate over the values in an iterable;\
  Use for…in to iterate over the properties of an object (the object keys) // https://alligator.io/js/for-of-for-in-loops/\
 <b>Object.values</b> takes an object and returns an array with the values, in the same order that a for…in loop would give us.\
 <b>Object.entries</b>returns an array with arrays of key-value pairs // https://alligator.io/js/object-entries-values/
