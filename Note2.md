Number(undefined) // NaN    ||||  Number(null) // 0  |||| Number([]) // return 0 (numeric conversion)\
Null has one value: null. It is explicitly nothing, so null must be assigned. A variable that has no value is undefined. \
The general idea is that window.onload fires when the document's window is ready for presentation and document.onload fires when the DOM tree (built from the markup code within the document) is completed.\
multiplication *, division /, addition +, subtraction -. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.\
The word <b>“async”</b> before a function means one simple thing: a function always returns a promise. \
async/await allows us to write promise-based(asynchronous) code in a "synchronous" manner using the modern versions of Javascript. https://javascript.info/async-await \
<b>await</b>, that works only inside async functions, makes JavaScript wait until that promise settles and returns its result. <b>await</b> returns the fulfilled value of the promise, or the value itself if it's not a Promise.\
With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises, because sometimes (e.g. in the outermost scope) we have to use these methods. \
<b>fetch()</b> allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell. \
Javascript attempting to coerce an unexpected value type to the expected type.https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23 \
Whenever you pass a string as an operand in a numeric/njuːˈmerɪk/ expression involving either of these operators: -, *, /, %, the number's conversion process is similar to calling the in-built Number function on the value. any string containing only numeric characters will be converted to it's number equivalent, but a string containing a non-numeric character returns NaN.\
The + operator performs two functions: Mathematical addition, String concatenation (When a string is an operand of the + operator).\
The valueOf() method returns the primitive value(string/number) of the specified object. <b>When both the toString and valueOf methods are defined on an Object, Javascript uses the valueOf method instead.</b> (toString() and valueOf(): call valueOf() first, if the result is primitive, return it and don't need to run toString; otherwise, return is not primitive, call toString.) \
The inherited toString method of Arrays work abit differently, it works in a way similar to calling the join method of an array without any arguments. Converting [] to a primitive first tries valueOf() which returns the array itself; If an object has no primitive value, valueOf returns the object itself. \
arr.reduce(callback[, initialValue]): the callback should have a return value  \
<b>Destructuring</b> assignment allows you to assign the values of an array or properties of an object to variables using syntax that looks similar to array or object literals. \
The <b>rest</b> operator lets you collect the remaining elements of an iterable into an Array. It must come last and it is used for rest parameters and destructuring. \
The <b>spread</b> operator (...) looks exactly like the rest operator, but is used inside function calls and array/object literals (not inside destructuring patterns). The spread operator allows you to pull elements out of an array or pull the properties out of an object.\
 syntax: myFunction(...iterableObj); |||| [...iterableObj, '4', 'five', 6]; |||| let objClone = { ...obj }; \
cheat sheet/trick:<b> In general, ... used in the left of assignment operator is rest, used in the right is spread operator.</b> \
In a way, rest syntax is the opposite of spread syntax: spread 'expands' an array into its elements, while rest collects multiple elements and 'condenses/kənˈdens/' them into a single element. \
The <b>throw</b> statement throws a user-defined exception. 'throw' is a statement, it performs an action; Execution/ˌek·sɪˈkju·ʃən/ of the current function will stop (the statements after throw won't be executed/ˈek·sɪˌkjut/), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.\
<b>Error is a constructor.</b>The Error constructor creates an error object. Instances of Error objects are thrown when runtime errors occur. \
const foo = 'bar'; \
const baz = {foo}; \
baz // {foo: "bar"} \
// same as
const baz = {foo: foo};\ 
http://es6.ruanyifeng.com/#docs/object \
function f(x, y) {return {x, y};} \
same as function f(x, y) { return {x: x, y: y};} \
<b>The process of a web browser turning HTML, CSS, and JavaScript into a finished visual representation:</b> \
1 Process HTML markup and build the DOM tree; 2 Process CSS markup and build the CSSOM tree; 3 Combine the DOM and CSSOM into a render tree; 4 Browser computes the geometry of the layout and its elements based on the render tree(figure out the exact size and position of each visible object/node on the page); 5 Paint the individual nodes to the screen.\
The browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node. A render tree is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction \
A <b>repaint</b> occurs when changes are made to an elements skin that changes visibly, but do not affect its layout.\
<b>Cross Browser Testing</b> is a type of testing to verify if an application works across different browsers as expected. It is the process of verifying your application’s compatibility with different browsers.\
We might have observed that some websites are not properly displayed on some browsers and we just think that the website is broken. But, as soon as you open it on a different browser, the website displays just fine. This behavior explains the compatibility of a website with different browsers. Browser interpret/parses code differently. Thus, some browsers may lack the features that your website is trying to show and make your website look broken on that browser.The best website designs are compatible with the most popular browsers, thus being cross-browser compatible. Make sure you understand the browsers and devices you're targeting. Is your page mostly for mobile users? Are you working within a company that still uses legacy browsers? Test accordingly.\
https://www.admecindia.co.in/blog/what-are-common-cross-browser-issues-and-how-handle-them  \
<b>Tips to make your website Cross Browser Compatible</b> \
1.Define Valid Doctype;2.use cross browser friendly javascript libraries like jQuery, AngularJS, ReactJS, and some of CSS frameworks like Bootstrap;3.use css reset: normalize.css or reset.css ---every browser has different default CSS rules that they follow. This is why you use CSS reset stylesheet to make sure your browsers follow the same basic rules and behave consistently.make sure that you add your reset stylesheet before your main stylesheet; 4.You can link to different stylesheets for different browsers using conditional comments;5.validate your website: This will point all your mistakes and improvements to make sure your code doesn’t break. You can use w3 validator to validate HTML of your website.you can validate for CSS too;6.Cross-Browser Testing: BrowserShots, IE Tester, Adobe Browser Lab; 7 Browser/vendor prefixes to support features.
https://stackoverflow.com/questions/565641/what-cross-browser-issues-have-you-faced

