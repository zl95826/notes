Hoisting is JavaScript's default behavior of moving declarations to the top.\
https://javascript.info/operators \
JavaScript String split() Method: The split() method is used to split a string into an array of substrings, and returns the new array.If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string. <i>string.split(separator, limit)</i>\
toISOString() method: converts a Date object into a string, using the ISO standard. The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ\
The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. This method extracts the characters in a string between "start" and "end", not including "end" itself.\
strict comparison (===)\
CSS: Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements. 可以理解为对于a block element,它会add a line-break after the element,所以following elements只能start from a new line,即便它的width只占10%。\
CSS property position可以和float同时使用。\
<b>setTimeout()</b>: as its name suggests, you have a piece of code that you want to run after certain period of time, you use the setTimeout() function. One of the main application of setTimeout is make it asynchronous. There’s a special use case: setTimeout(func, 0). The function is scheduled to run “right after” the current code. In other words, asynchronously\
setTimeout(() => alert("World"), 0);alert("Hello"); // this outputs “Hello”, then immediately “World”\
setTimeout() serves as a minimum time for the delay part.\
<b>setInterval</b> method is very similar to setTimeout, but setTimeout happens only one (time); setInterval will keep executing a piece of code/a callback function at a given interval, it doesn't stop until you make a stop. setInterval guarantees that your code will be passed to STACK in exact intervals. Actual time of execution of your code have nothing with setInterval.\
There are two ways of running something regularly. One is setInterval. The other one is a recursive setTimeout,Recursive setTimeout guarantees a delay between the executions, setInterval – does not.\
<b>Objects are allocated in a heap which is memory allocation happens; \
Call Stack:  a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call). It is single-threaded. Meaning it can only do one thing at a time. Code execution is synchronous. A function invocation creates a stack frame that occupies a temporary memory. It works as a LIFO — Last In, First Out data structure.</b>\
JavaScript is a single-threaded programming language, single threaded runtime, which means it has a single Call Stack. And it can do one thing at a time, that's what a single thread means, the program can run one piece of code at a time. If we step into a function, we put something on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf \
Blocking is just code that's slow. Doing a while loop from one to ten billion is slow; network request is slow, doing image requests are slow. The browser is blocked, it's stuck, it cannot do anything(it can't render, it can't run any other code) until those requests complete. If we want people to have nice fluid UI, we cannot block the stack(example, avoidng syncronous AJAX request). \
The solution? We're provided with asynchronous callbacks. There is almost no-blocking functions in the browser, equally in node, they're all made asynchronous, which means we run some code, give it a callback, and run that later.\
In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue.https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4 \
Callbacks are by far the most common way to express and manage asynchrony in JavaScript programs. \
Well it’s true that javascript run-time can do only one thing at a time, we can’t make an Ajax call while running another code, we also can’t do a setTimeout while running another code but we can do all of these through Browser. The reason we can do things concurrently is that the browser is more than just the JS Runtime. Browser gives us thoese other things, like Web APIs. Browser allows you to make an Ajax call while running another code and it can also do a setTimeout while running another code.<b> Doing setTimeout and making an Ajax request does not live in Javascript run-time but browser handles it as a web API. setTimeout/DOM(document)/ajax(XMLHttpRequest) is an API provided to us by the browser. We get a timer in web API. Any of the Web APIs pushes the callback on to the task/callback queue when it's done. Finally we get to the event loop, the event loops job is to look at the stack and look at the task queue, if the stack is empty it takes the first thing on the queue and pushed it on to the stack and run it.</b>\
The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it.\
What is the difference between an expression and a statement in JS?\
It can treat any expression as a statement (but it cannot treat statements as expressions).<b> An expression produces a value and can be written wherever a value is expected. A statement performs an action.</b> Loops and if statements are examples of statements.\
(param1, param2, …, paramN) => { statements }  \
(param1, param2, …, paramN) => expression // equivalent to: => { return expression; } \
Parenthesize the body of function to return an object literal expression: params => ({foo: bar})\
The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. \
Why <b>requestAnimationFrame()</b> is better than setTimeout()?\
The problem with setTimeout() is that even though we specify this interval, the browser might be busy performing other operations, and our setTimeout calls might not make it in time for the repaint, and it’s going to be delayed to the next cycle. This is bad because we lose one frame, and in the next the animation is performed 2 times, causing the eye to notice the clunky animation. requestAnimationFrame is the standard way to perform animations. requestAnimationFrame() since its introduction was very CPU friendly, causing animations to stop if the current window or tab is not visible. Using requestAnimationFrame the browser can further optimize/ˈɒp.tɪ.maɪz/ the resource consumption/kənˈsʌmpʃən/ and make the animations smoother /smuðə/.\
window.getComputedStyle(element [, pseudoElt]); // The object from getComputedStyle is read-only.\
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
It adds a return this to the end of the function, so that the object that is created is returned from the function.\
<b>Window sizes and scrolling</b>    https://javascript.info/size-and-scroll-window  \
An <b>em</b> is equal to the computed font-size of that element’s parent. <b>rem</b> values are relative to the root html element, not to the parent element. \
<b>Function declarations have priority over variable declarations, but not over variable assignments.</b> \
<b>AJAX</b> allows you to update parts of a website without reloading the entire page. You can receive data from a server and send data to a server in the background.\
HTML5 Semantic Elements: details,figure\
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area. The overflow property only works for block elements with a specified height. \
<b>Each input field must have a name attribute to be submitted.</b> https://www.w3schools.com/html/html_forms.asp   \
