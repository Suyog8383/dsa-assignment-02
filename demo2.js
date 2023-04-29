function outer() {
  let counter = 10;

  return function incrementCounter(num) {
    counter += num;
    return counter;
  };
}

let myFunc = outer();
console.log(myFunc(1)); //11
console.log(myFunc(2)); //13
console.log(myFunc(3)); //16
console.log(myFunc(4)); //20

// function outer() {
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   function inner() {
//     let a1 = 20;
//     function innerV2() {
//       let a11 = 20;
//       function innerV3() {
//         console.log({ a, a1, a11 }); //10 20 20
//       }
//       innerV3();
//     }
//     innerV2();
//   }

//   inner();
// }

// outer();

function outer() {
  var a = 10;
  let b = 20;
  const c = 30;

  function inner() {
    let a1 = 20;
    function innerV2() {
      let a11 = 20;
      function innerV3() {
        console.log({ a, a1, a11 });
      }
      return innerV3;
    }
    return innerV2();
  }

  return inner();
}

const result = outer();
console.log(result());
