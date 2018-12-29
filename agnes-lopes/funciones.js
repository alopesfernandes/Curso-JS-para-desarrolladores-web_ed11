/*const age = 5
const country = 'Spain'

let hasAge =21

    if (country === 'Spain'){
        const hasAge = 18
    }
    if (age>= hasAge){
      console.log ('come in')
    }else {
      console.log('You cant come in')
    }
  */

   /* function CanHeGoIn(age, country){
      let hasAge = 21

      if (country === 'Spain'){
          hasAge = 18
      }
      if (age>= hasAge){
        console.log ('come in')
      }else {
        console.log('You cant come in')
      }
    }
    const spainAdulto = 18

    CanHeGoIn(18, 'Spain')
    CanHeGoIn(21, 'EEUU')
    CanHeGoIn(17, 'Spain')
    CanHeGoIn(22, 'Brasil')
*/
function evenOrOdd(num) {
     if(num % 2 === 0){
       console.log(`${num} is an even number`)
     } else{
       console.log(`${num} is an odd numeber`)
     }
}
evenOrOdd(5)
evenOrOdd(4)
evenOrOdd(274709347097472)

// Dado un array de numero , quiero devolver otro array solo con numeros pares
let nums = [1,2,3,4,5,6,7,8,9,10];

let numsPares = nums.filter(function(par){
  const esPar = par % 2 == 0
  return esPar
});
console.log(numsPares);

// numeros pares

// Example from free code camp
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// Example from free code camp
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);

function functionWithArgs(c, d) {
  console.log(c + d);
}
functionWithArgs(7, 9);

// example Meg
function reusableFunction() {
  console.log("Hi Meg");
}

reusableFunction();





