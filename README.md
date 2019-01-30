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
call() and apply(), Both can be called on functions with a given this value and arguments, difference is that call() accepts an argument list, while apply() accepts a single array of arguments.\
splice:adds/removes items to/from an array, returns the removed item(s), changes the existing array; <b>Array method</b> array.splice(index, howmany, item1, ....., itemX) index：An integer that specifies at what position to add/remove items; howmany:The number of items to be removed. If set to 0, no items will be removed.\
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
<b>Math.floor(x)</b> returns the value of x rounded down to its nearest integer; <b>Math.ceil(x)</b> returns the value of x rounded up to its nearest greater intefer; <b>Math.round(x)</b> returns the value of x rounded to its nearest greater integer.四舍五入\
ES6 will almost certainly not cover syntax for defining class variables. Only methods and getters/setters can be defined using the class syntax. \
points="100,10 40,198 190,78 10,78 160,198" This is five "corners" starting at (100,10), with a line from there to (40, 198) and so on. The final point joins the first point to make a closed polygon. Each point is separated by space, the comma used to seperate the x and y coordinates of each point.\
string.replace(searchvalue, newvalue) returns a new string where the specified values are replaced\
The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element. \
var a = 'foo';var b={a}; // b={a:'foo'}\
  b.a==={a}.a // true\
however if just {a}.a, it shows a syntax error, fix it by ({a}).a\
  The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.\
  <b>Object.assign(target, ...sources)</b> This method has a flaw that it only does a shallow copy. It means that nested properties are still going to be copied by reference. Be careful about it. This method helps you copy properties of one object into another object. The Object.assign() method only copies enumerable and own properties from a source object to a target object.\
  <b>obj.hasOwnProperty(prop)</b>\
  Use for…of to iterate over the values in an iterable;\
  Use for…in to iterate over the properties of an object (the object keys) // https://alligator.io/js/for-of-for-in-loops/ \
 <b>Object.values</b> takes an object and returns an array with the values, in the same order that a for…in loop would give us.\
 <b>Object.entries </b>returns an array with arrays of key-value pairs // https://alligator.io/js/object-entries-values/ \
  Plain objects (as created by object literals) are not iterable\
  <b>Clone an object</b>: deep copy using iteration,JSON.parse(JSON.stringify(src));Object.assign() shallow copy\
  https://medium.com/@Farzad_YZ/3-ways-to-clone-objects-in-javascript-f752d148054d \
  <b>How to concatenate arrays?</b> var arr1 = [0, 1, 2];var arr2 = [3, 4, 5];arr1 = arr1.concat(arr2); \
  Or using spread syntax: arr1 = [...arr1, ...arr2];\
The :nth-of-type selector is very similar to :nth-child but with one critical difference: it is more specific. :nth-of-type only selects children of that type. Other type element is completely skipped over and ignored.<br/>https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child  (see the last example)\
  The placeholder attribute specifies a short hint. The short hint is displayed in the input field before the user enters a value.\
 dash: - \
  CSS: The <b>content</b> property is used with the ::before and ::after pseudo-elements, to insert generated content. \
  You cannot style generated content without defining what that content should be. If you don’t really need any content, just an extra “invisible element” to style, you can set it to the empty string (content: '') and just style that. \
Template literals are string literals allowing embedded expressions. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). Template literals are enclosed by the back-tick (` `) character instead of double or single quotes.\
<b>Why CSS calc() not working?</b> Use -webkit prefix and whitespaces around the operator.\
The + and - operators must always be surrounded by whitespace. The * and / operators do not require whitespace, but adding it for consistency is allowed, and recommended.\
Recommend always create variables with the const keyword. This is because variables created with a const keyword cannot be reassigned.\ 
Event delegation allows us to add an event listener to one parent, and avoid to add many event listeners to specific nodes.\
event.currentTarget is always the element the event is actually bound; event.target is the element that triggered the event, so e.target could be a child of e.currentTarget, or e.target could be === e.currentTarget, depending on how your markup is structured.\
<b>window.matchMedia</b> provides a way for Javascript to react when a media query condition is met or unmet. You give the method(matchMedia) a media query string(/ or a CSS media query breakpoint string) it gives you back a MediaQueryList object which has some useful methods and properties: property -> matches and media; method -> addListener(functionref) and removeListener(functionref).\(see more: https://tylergaw.com/articles/reacting-to-media-queries-in-javascript/ and http://www.javascriptkit.com/dhtmltutors/cssmediaqueries4.shtml)  \
Debug:\
  const counter={cnt:0,\
inc:function() {cnt++;console.log(cnt);}\
              };\
document.addEventListener("click", counter.inc(),false);\
  ReferenceError: cnt is not defined\
  Destructuring allows you to easily access the values of arrays or objects and assign them to variables.\
  <b>React</b> \
Hooks are nothing but methods where you can do appropriate things. If you know what we can do with each hooks and when they are called and why they are called, so we can control things very smoothly.\
The render() method is the only required method in a class component.\
<b>Functional Components vs Class Components</b>: The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. It is also called a functional stateless component which doesn’t have its own state. Another feature which you cannot use in functional components are lifecycle hooks;
A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits.\
You should use functional components if you are writing a component which doesn’t have its own state or needs to access a lifecycle hook. Otherwise you can stick to class components.
