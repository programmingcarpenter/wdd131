let counter = localStorage.getItem("reviewCounter");

if (counter == null) {
    localStorage.setItem("reviewCounter", 0);
}
let counterInt = parseInt(counter);
counterInt ++ ;
localStorage.setItem("reviewCounter", counterInt);
console.log(counter);