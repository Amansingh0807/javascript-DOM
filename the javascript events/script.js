      // // // // // // // // JavaScript Events // // // // // // // //

                    //  What is event in JavaScript // 
// JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.

     // // // // // // // //  Different Types of Event // // // // // // //
// onclick()-	Triggered when an element is clicked.

function displayMsg() {
    console.log("hey hurray you clicked the button.. ");
}
// onmouseover() - Fired when the mouse pointer moves over an element.

// onmouseout()	- Occurs when the mouse pointer leaves an element.
// onkeydown() -	Fired when a key is pressed down.
// onkeyup()	- Fired when a key is released.
// onchange() - Triggered when the value of an input element changes.
// onload()	- Occurs when a page has finished loading.
// onsubmit() -	Fired when a form is submitted.
// onfocus()	- Occurs when an element gets focus.
// onblur() -	Fired when an element loses focus.



/*Event Bubbling 
events starts at the most specific element and flows towards least specific element */

/*Event Capturing
Even to start at the least specific elements and first towards the most specific element */


//  Event Handler in HTML Attributes  there are 3 ways to assign event handlers 
// Event Objects  


// DOM Level 0 event handlers
/* addEventListener() 
addEventListener is a built-in function in JavaScript that allows you to attach an event handler to a specified element, such as a button or a link.*/
const y = document.getElementById("hoverPara");
 
y.addEventListener("mouseover", RespondMouseOver);

function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
        "mouseover Event !!" + "<br>";
}



// // // // // // // // removeEventListener() // // // // // // // // // 
// Javascript removeEventListener() is an inbuilt function that is used to remove an event handler that was previously added using the addEventListener() function from the element.

/*Syntax:
element.removeEventListener(event, listener, useCapture)*/

function RespondClick() {
    y.removeEventListener("mouseover", RespondMouseOver);
    document.getElementById("effect").innerHTML +=
        'You clicked the "click here" button' + "<br>" +
        "Now mouseover event doesn't work !!";
}



