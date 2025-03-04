//ECOMMERCE

//this is not how to write the code for an ecommerce

// addToCart()
// payment()
// storeInDB()
// checkout()

//how we should write is: taking into account whether the first function executed successfully or not

// addToCart(() => payment(() => storeInDB(() => checkout())));

//CALLBACK HELL: when the callbacks become too nested , that they are harder to read & debug

// addToCart(() => {
//   payment(() => {
//     storeInDB(() => {
//       checkout();
//     });
//   });
// });


// THE SOLUTION TO CALLBACK HELL: promise chaining

addToCart()
  .then(() => payment())
  .then(() => storeInDb())
  .then(() => checkout());
