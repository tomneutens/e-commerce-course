//Define a new function.
(function(){
  //Variables defined here will not affect the global scope.
  var window = "Whoops, at leat I only broke my code!";
  console.log(window);
//The extra set of parenthesis here says run the function we just created.
}());
//Our wacky code inside our closure doesn't affect everyone else.
console.log(window);