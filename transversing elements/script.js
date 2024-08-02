    // // // // // // // // // // TRAVERSING ELEMENT // // // // // // // // // //


//  Selecting parent element
// The DOM parentElement property is used to return the parent element of a particular child element. It is a read-only property. The parentElement and parentNode properties are similar and the only difference is the parentElement property returns null if the parent node is not an element. 


let msg = document.getElementById("beta").parentElement.nodeName;
console.log(msg);


//  Selecting child element

let m = document.getElementById("papa").childNodes.nodeName;
console.log(m);

//  Selecting Sibling elements
// The nextSibling property returns the next node on the same tree level.
// The nextSibling returnes a node object.
// The nextSibling property is read-only.


let s = document.getElementById("beta").nextSibling.innerHTML;
console.log(s);