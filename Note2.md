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
