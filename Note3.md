The JavaScript delete operator removes a property from an object; When you delete an array element, the array length is not affected. When the delete operator removes an array element, that element is no longer in the array. \
The Object.keys() method returns an array of a given object's own property names. \
Array.isArray(obj) The isArray() method determines whether an object is an array. \
The destructuring assignment syntax is a JavaScript expression that unpacks values from arrays, or properties from objects, and assign into variables. It can also unpack properties from objects passed as function parameter. \
flat() returns a new array that’s a flattened version of the array it was called on. The flat() method creates a new array with all sub-array elements concatenated into it. \
const arr = [['krunal', 'ankit'], [21, 74]]; // ["krunal", "ankit", 21, 74]    \
The overflow property only works for block elements with a specified height. \
The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).\
justify-content: space-between; The first item is flush with the start, the last is flush with the end. There is an equal amount of space between each item. Distribute items evenly.\
The align-items property is used to align the flex items vertically.\
The <b>throw</b> statement throws (generates) a user-defined exception/error. The exception can be a JavaScript String, a Number, a Boolean or an Object. \
JavaScript has a built in <b>error</b> object that provides error information when an error occurs. The error object provides two useful properties: name and message. \
The <b>in</b> operator returns true if the specified property is in the specified object or its prototype chain. \
<b>for ... in</b>: The loop will iterate over all enumerable properties of the object itself and its constructor's prototype(it's also an object) \
If you use <b>obj.hasOwnProperty(prop)/</b> to check,  the inherited properties are not displayed.\
function.toString()/Function.prototype.toString() :The Function object overrides the toString method inherited from Object; it does not inherit Object.prototype.toString. \
obj.toString()/Object.prototype.toString(): Every object has a toString() method. The toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]" \
What will the code below output to the console and why ?

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);


The above code will output the following to the console:

"122"
"32"
"02"
"112"
"NaN2"
NaN
Here’s why…

The fundamental issue here is that JavaScript (ECMAScript) is a loosely typed language and it performs automatic type conversion on values to accommodate the operation being performed. Let’s see how this plays out with each of the above examples.

Example 1: 1 + "2" + "2" Outputs: "122" Explanation: The first operation to be performed in 1 + "2". Since one of the operands ("2") is a string, JavaScript assumes it needs to perform string concatenation and therefore converts the type of 1 to "1", 1 + "2" yields "12". Then, "12" + "2" yields "122".

Example 2: 1 + +"2" + "2" Outputs: "32" Explanation: Based on order of operations, the first operation to be performed is +"2" (the extra + before the first "2" is treated as a unary operator). Thus, JavaScript converts the type of "2" to numeric and then applies the unary + sign to it (i.e., treats it as a positive number). As a result, the next operation is now 1 + 2 which of course yields 3. But then, we have an operation between a number and a string (i.e., 3 and "2"), so once again JavaScript converts the type of the numeric value to a string and performs string concatenation, yielding "32".

Example 3: 1 + -"1" + "2" Outputs: "02" Explanation: The explanation here is identical to the prior example, except the unary operator is - rather than +. So "1" becomes 1, which then becomes -1 when the - is applied, which is then added to 1 yielding 0, which is then converted to a string and concatenated with the final "2" operand, yielding "02".

Example 4: +"1" + "1" + "2" Outputs: "112" Explanation: Although the first "1" operand is typecast to a numeric value based on the unary + operator that precedes it, it is then immediately converted back to a string when it is concatenated with the second "1" operand, which is then concatenated with the final "2" operand, yielding the string &quo‍‌‌‍‍‍‌‍‍‍‌‌‌‍‌‌‌‌t;112".

Example 5: "A" - "B" + "2" Outputs: "NaN2" Explanation: Since the - operator can not be applied to strings, and since neither "A" nor "B" can be converted to numeric values, "A" - "B" yields NaN which is then concatenated with the string "2" to yield “NaN2”.

Example 6: "A" - "B" + 2 Outputs: NaN Explanation: As exlained in the previous example, "A" - "B" yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN.
