The general idea is that window.onload fires when the document's window is ready for presentation and document.onload fires when the DOM tree (built from the markup code within the document) is completed.\
The word <b>“async”</b> before a function means one simple thing: a function always returns a promise.https://javascript.info/async-await  \
<b>await</b>, that works only inside async functions, makes JavaScript wait until that promise settles and returns its result.\
With async/await we rarely need to write promise.then/catch, but we still shouldn’t forget that they are based on promises.
