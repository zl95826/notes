Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters.\
Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval. This technique is normally used to control scrolling, resizing and mouse-related events.\
In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event. This technique is commonly used in search boxes with a suggest drop-down list.\
Debouncing and throttling techniques are used to limit the number of times a function can execute.\
http://www.ruanyifeng.com/blog/2016/04/cors.html  \
A shallow copy successfully copies the primitive types like numbers and strings, but any object reference will not be recursively copied, but instead, the new, copied object will reference the same object. The deep copy will duplicate every object it encounters. The copy and the original object will not share anything so that it will be a copy of the original. \
The deep copy will duplicate every object it encounters. The copy and the original object will not share anything so that it will be a copy of the original. When performing a deep copy, those external objects are copied as well, so the new, cloned object is entirely independent of the old one. \
A shallow copy: It means that nested properties are still going to be copied by reference. \
Node.js basically allows you to run javascript not just in the browser but anywhere else like a normal programming language. \
Good article about Instagram API: https://www.jianshu.com/p/258e74351578 \
Object.assign({}, ['a','b','c']); Or { ...['a', 'b', 'c'] } // {0:"a", 1:"b", 2:"c"} \
<strong>Node</strong>\
Node is not a framework, it's a runtime environment for executing JavaScript code. \
http Module:helps us with launching a server or also with other tasks like sending requests because a node app could also send a request to another server.\
To cancel any currently running process, you can press Ctrl + C and it will ask you if you are sure you want to Terminate batch job (Y/N)?
At this point, you can type y and then press Enter and you will be back to the prompt.\
https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/  \
Node.js can’t control the speed or time of data arrival, the speed of the stream. It only can decide when it’s time to send out the data. If it’s not yet time, Node.js will put them in the buffer — the “waiting area” — a small location in the RAM, until it’s time to send them out for processing. \
++index will increment index by 1 before it's used. So, if index = 0, then arry[++index] is the same as arry[1]. \

index++ will increment index by 1 after it's used. So, if index = 0, then arry[index++] is the same as arry[0]. After this, index will be 1. \
