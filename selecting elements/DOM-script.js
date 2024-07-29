 //METHODS OF SELECTING ELEMENTS IN DOM 


// // // // // // // //   getElementById() // // // // // // 
// Find elements by id 

let dummy = document.getElementById("dom");
console.log(dummy);

// // // // // // // //  getElementsByName()  // // // // // // 
// Find elements by name

let nama = document.getElementsByName("language");
console.log(nama);

// // // // // // // // // getElementsByTagName()  // // // // // // // //
// Find elements by tag name

let btn = document.getElementsByTagName("h3");
console.log(btn);

// // // // // // // //  getElementsByClassName()  // // // // // // // //
// Find elements by class name

let head = document.getElementsByClassName("heading");
console.log(head);

// // // // // // // //  querySelector()   // // // // // // // //

let msg = document.querySelector("h1");
console.log(msg);     //here it will only return the first value of h1 tag that is given in the html code (JA) but for all the tags you have to use document.querySelectorAll keyword that is below 


// // // // // // // // //  querySelectorAll()  // // // // // // // //
// ot will select all the query that is given by same tag name 

let  mess = document.querySelectorAll("h1");
console.log(mess);