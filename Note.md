JavaScript String split() Method: The split() method is used to split a string into an array of substrings, and returns the new array.If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string. <i>string.split(separator, limit)</i>\
toISOString() method: converts a Date object into a string, using the ISO standard. The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ\
The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. This method extracts the characters in a string between "start" and "end", not including "end" itself.\
strict comparison (===)\
CSS: Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements. 可以理解为对于a block element,它会add a line-break after the element,所以following elements只能start from a new line,即便它的width只占10%。\
CSS property position可以和float同时使用。\
<b>setTimeout()</b>: as its name suggests, you have a piece of code that you want to run after certain period of time, you use the setTimeout() function. One of the main application of setTimeout is make it asynchronous. There’s a special use case: setTimeout(func, 0). The function is scheduled to run “right after” the current code. In other words, asynchronously\
setTimeout(() => alert("World"), 0);alert("Hello"); // this outputs “Hello”, then immediately “World”\
<b>setInterval</b> method is very similar to setTimeout, but setTimeout happens only one (time); setInterval will keep executing a piece of code/a callback function at a given interval, it doesn't stop until you make a stop. setInterval guarantees that your code will be passed to STACK in exact intervals. Actual time of execution of your code have nothing with setInterval.\
There are two ways of running something regularly. One is setInterval. The other one is a recursive setTimeout,Recursive setTimeout guarantees a delay between the executions, setInterval – does not.\
Javascript is essentially single threaded, meaning it will not perform more than one operation at a time.\
What is the difference between an expression and a statement in JS?\
It can treat any expression as a statement (but it cannot treat statements as expressions). An expression produces a value and can be written wherever a value is expected. A statement performs an action. Loops and if statements are examples of statements.\
(param1, param2, …, paramN) => { statements }  \
(param1, param2, …, paramN) => expression // equivalent to: => { return expression; } \
Parenthesize the body of function to return an object literal expression: params => ({foo: bar})
