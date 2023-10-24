let myGlobal = 10; // Declare and initialize myGlobal using let

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal !== "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal !== "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1(); // Call fun1 to set oopsGlobal

fun2(); // Call fun2 to check myGlobal and oopsGlobal
