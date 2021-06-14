let a = "Adam";
let favoriteMovies = (name = "Tommy Wiseau", movieName = "The Room") =>
  console.log(`My name is ${name}, and my favorite movie is ${movieName}!`);

favoriteMovies("Adam", "Once Upon a Time in Hollywood");
let t = ["Adam", "Nashville", "Spicy chicken"];
let fullName = "Adam Vaughn";
let firstName = fullName.split(" ")[0];
let getFirstName = () => {
  console.log(firstName);
};
let getFirstNameConcise = () => console.log(firstName);

getFirstName();
getFirstNameConcise();

let doMath = (a, b) => {
  let thing = {
    result: a + b,
    product: a * b,
  };
  return thing;
};
//this logs both result AND product
console.log(doMath(3, 4));

let result = doMath(3, 4).result;
let product = doMath(3, 4).product;
console.log(`The product is ${product} and the result is ${result}!`);

k = (n, l, q) => console.log(`${n} ${l} ${q}`); //
k(...t); //
f = (y) => {
  //
  length = [...y]; ////
  console.log(length); ////// javascript.info/ninja-code //////
  for (ii = 0; ii < length.length; ii++) {
    ////
    console.log(length[ii]); //    "Only a worthy person should be able to uphold the development of your code."
  } //
}; //
f(a); //
