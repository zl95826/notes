Hoisting is JavaScript's default behavior of moving declarations to the top.\
String() which is a constructor call, is basically calling the .toString() \
Array.valueOf() will return the same as Array \
<b>ASSIGNING TO AN UNDECLARED VARIABLE MAKES IT GLOBAL</b> \
https://javascript.info/operators \
JavaScript String split() Method: The split() method is used to split a string into an array of substrings, and returns the new array.If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string. <i>string.split(separator, limit)</i>\
toISOString() method: converts a Date object into a string, using the ISO standard. The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ\
The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. This method extracts the characters in a string between "start" and "end", not including "end" itself.\
strict comparison (===)\
CSS: Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements. 可以理解为对于a block element,它会add a line-break after the element,所以following elements只能start from a new line,即便它的width只占10%。\
CSS property position可以和float同时使用。\
<b>setTimeout()</b>: as its name suggests, you have a piece of code that you want to run after certain period of time, you use the setTimeout() function. One of the main application of setTimeout is make it asynchronous. There’s a special use case: setTimeout(func, 0). The function is scheduled to run “right after” the current code. In other words, asynchronously\
setTimeout(() => alert("World"), 0);alert("Hello"); // this outputs “Hello”, then immediately “World”\
setTimeout() serves as a minimum time for the delay part. setTimeout is not a part of the JavaScript engine, it’s a part of something known as web APIs (in browsers) and C/C++ APIs (in node.js).\
<b>setInterval</b> method is very similar to setTimeout, but setTimeout happens only one (time); setInterval will keep executing a piece of code/a callback function at a given interval, it doesn't stop until you make a stop. setInterval guarantees that your code will be passed to STACK in exact intervals. Actual time of execution of your code have nothing with setInterval.\
<b>There are two ways of running something regularly. One is setInterval. The other one is a recursive setTimeout,Recursive setTimeout guarantees a delay between the executions, setInterval – does not. Using recursive setTimeout guarantees that until our method gets fully executed it will never be sent for another execution (to STACK).</b>\
<b>Objects are allocated in a heap which is memory allocation happens; \
Call Stack:  a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call). It is single-threaded. Meaning it can only do one thing at a time. Code execution is synchronous. A function invocation creates a stack frame that occupies a temporary memory. It works as a LIFO — Last In, First Out data structure.</b>\
JavaScript is a single-threaded programming language, single threaded runtime, which means it has a single Call Stack. And it can do one thing at a time, that's what a single thread means, the program can run one piece of code at a time. If we step into a function, we put something on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf \
Blocking is just code that's slow. Doing a while loop from one to ten billion is slow; network request is slow, doing image requests are slow. The browser is blocked, it's stuck, it cannot do anything(it can't render, it can't run any other code) until those requests complete. If we want people to have nice fluid UI, we cannot block the stack(example, avoidng syncronous AJAX request). \
The solution? We're provided with asynchronous callbacks. There is almost no-blocking functions in the browser, equally in node, they're all made asynchronous, which means we run some code, give it a callback, and run that later.\
In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue.https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4 \
Callbacks are by far the most common way to express and manage asynchrony in JavaScript programs. <b>Promises</b> are one way to deal with asynchronous code in JavaScript, without writing too many callbacks in your code. https://flaviocopes.com/javascript-promises/  \
Well it’s true that javascript run-time can do only one thing at a time, we can’t make an Ajax call while running another code, we also can’t do a setTimeout while running another code but we can do all of these through Browser. The reason we can do things concurrently is that the browser is more than just the JS Runtime. Browser gives us thoese other things, like Web APIs. Browser allows you to make an Ajax call while running another code and it can also do a setTimeout while running another code.<b> Doing setTimeout or making an Ajax request does not live in Javascript run-time but browser handles it as a web API. setTimeout/DOM(document)/ajax(XMLHttpRequest) is an API provided to us by the browser. We get a timer(and start it) in web APIs envuironment. Any of the Web APIs pushes the callback on to the task/callback/message queue when it's done(the timer expired).(=The timer has expired, now the callback is pushed to the message queue. But the callback is not immediately executed, and that’s where the event loop kicks in.) Finally we get to the event loop, the event loops job is to look at the stack and look at the task queue, if the stack is empty it takes the first thing on the queue and pushed it on to the stack and run it.</b>\
The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it.\
The event loop, the web APIs and the message queue/task queue are not part of the JavaScript engine, it’s a part of browser’s JavaScript runtime environment. https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff  \
What is the difference between an expression and a statement in JS?\
It can treat any expression as a statement (but it cannot treat statements as expressions).<b> An expression produces a value and can be written wherever a value is expected. A statement performs an action.</b> Loops and if statements are examples of statements.\
(param1, param2, …, paramN) => { statements }  \
(param1, param2, …, paramN) => expression // equivalent to: => { return expression; } \
Parenthesize the body of function to return an object literal expression: params => ({foo: bar})\
The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. \
Why <b>requestAnimationFrame()</b> is better than setTimeout()?\
The problem with setTimeout() is that even though we specify this interval, the browser might be busy performing other operations, and our setTimeout calls might not make it in time for the repaint, and it’s going to be delayed to the next cycle. This is bad because we lose one frame, and in the next the animation is performed 2 times, causing the eye to notice the clunky animation. requestAnimationFrame is the standard way to perform animations. requestAnimationFrame() since its introduction was very CPU friendly, causing animations to stop if the current window or tab is not visible. Using requestAnimationFrame the browser can further optimize/ˈɒp.tɪ.maɪz/ the resource consumption/kənˈsʌmpʃən/ and make the animations smoother /smuðə/.\
setTimeout doesn’t take into account what else is going on in the browser. They don’t know, or care, if the animation will be visible, if the page is in an inactive tab, etc. And so the animations would continue to be called, and then run them all very quickly to catch up when it becomes active again. \
setTimeout only updates the screen when it wants to, not when the computer is able to, whether the the browser is able to render the animations optimally or not. The key difference here is that with requestAnimationFrame you are requesting the browser to draw your animation at the next available opportunity, not at a predetermined interval. requestAnimationFrame() defers to the browser for how and when to do the animations. The browser has the ability to optimize when these animations are rendered. The browser can also stop animations in inactive tabs, making it more CPU friendly.\
Using requestAnimationFrame gives the browser the ability to optimize your animations to make them smoother and more resource efficient. \
window.getComputedStyle(element [, pseudoElt]); <p style='color:'red'>The .style object only includes style properties directly set on the DOM element, which means inline style</p>. Properties determined from CSS are not visible that way.// The object from getComputedStyle is read-only.\
A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point.\
Immutable vs Mutable in JS - the immutable (unable to change or mutate) values are primitive values - numbers, strings, booleans, null, undefined). While the mutable are all other objects. The object values are references to the location, in memory, that the value resides. Example: var s = "my string"; s.toUpperCase(); var t = s; //s = "my string", t="my string" \
Primitive types are stored by value, objects are stored by reference: (function () {}) === (function () {}); // false \
({})=== ({}); // false \
If you have several objects which share the same implementation, you can place that logic inside a <b>constructor function</b>, and then use the constructor function to create those objects. \
A constructor function is no different from any other function. A function is used as a constructor function when it is used after the new keyword. Any function can be a constructor function. \
The <b>constructor method</b> is a special method for creating and initializing an object created within a class.\
String function try to convert that argument into a string: String(null); // "null"     String(1337); // "1337"    String(true); // "true" \
But you can also use the String function as a constructor function: const pet = new String("dog")   typeof pet; // "object"   \
String("dog").constructor === String; // true              "string".constructor===String;//true  \
What's happening is a process called <b>autoboxing</b>. When you try to call a property or method on certain primitive types, JavaScript will first convert/autobox it into a temporary <b>wrapper object</b>, and access the property / method on it, without affecting the original. \
undefined or null does not have a wrapper object. http://blog.brew.com.hk/not-everything-in-javascript-is-an-object/  \
The valueOf() method returns the primitive value of the specified object. || The toString() method returns a string representing the object. By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]" || concat() method combines the text of two strings and returns a new string.\
<b>When you use new, four things happen:</b> https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e  \
It creates a new, empty object.\
It binds this to our newly created object.\
It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.\
It returns <i>this</i> automatically if the function doesn't return a different (its own) object, so that the object that is created is returned from the function.\
<b>Window sizes and scrolling</b>    https://javascript.info/size-and-scroll-window  \
An <b>em</b> is equal to the computed font-size of that element’s parent. <b>rem</b> values are relative to the root html element, not to the parent element. \
<b>Function declarations have priority over variable declarations, but not over variable assignments.</b> \
<b>AJAX</b> allows you to update parts of a website without reloading the entire page. You can receive data from a server and send data to a server in the background.\
<b>HTML</b> \
HTML5 Semantic Elements: details,figure \
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area. The overflow property only works for block elements with a specified height. \
<b>Each input field must have a name attribute to be submitted.</b> https://www.w3schools.com/html/html_forms.asp   \
The <img> tag has two required attributes: src and alt. Images are not technically inserted into an HTML page, images are linked to HTML pages. The <img> tag creates a holding space for the referenced image. To link an image to another document, simply nest the <img> tag inside <a> tags. \
<b>Block level elements in HTML:</b> hr, li, ol, ul \
<b>Inline elements in HTML:</b> a, b, br, button, em, i, img, input, label, textarea, select\
  A <b>closure</b> is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.\
  The closure function has access to the scope in which it was created, not the scope in which it is executed. In other words, <b>the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.</b> Closures store references of outer variables, they don’t copy the actual values. \
  <b>Lexical scoping</b> means scope of a variable is defined by its location within the source code.\
  https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda  \
<b>Context</b> is used to refer to the value of this in some particular part of your code. <b>Scope</b> refers to the visibility of variables and context refers to the value of this in the same scope. MDN defines “Scope” as “The current context of execution.” Each function when invoked creates a new scope.   \
Scope defines the lifetime and visibility of a variable. Every time we create a function or a block {} , we create a new scope. Variables declared with var have only function scope. Variables declared with let and const can have function and block scope. \
<b>How do I use a closure?</b>
1.	Write a function.
2.	Put it inside another function.
3.	Expose it by returning it or passing it to another function. \
  
When a function accepts another function as a parameter, or returns a function, it is called a <b>higher-order function</b>. \
<b>Media queries</b> give us a very powerful way to adjust our styles according to factors like the type of device, the viewport size, or even the device orientation, in order to make web pages look good on all devices(desktops, laptops, tablets, phones, etc).\
A <b>callback</b> function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. \
<b>Map object </b>provided by ES6. Map is a collection of elements where each element is stored as a Key, value pair.

