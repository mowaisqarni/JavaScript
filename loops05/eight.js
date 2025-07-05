// const arr=[1,2,3,4]

// const c=arr.reduce((acc,curr)=>{
//     console.log(`${acc} => ${curr}`)
//     return acc+curr
// }
// ,0
// )
// console.log(c)
const products = [
  { item: "Apple",  price: 0.50 },
  { item: "Bread",  price: 1.20 },
  { item: "Milk",   price: 0.90 }
];
const c=products.reduce((acc,curr)=> acc+curr.price ,0)
console.log(c)
 
 