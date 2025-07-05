//const arr=[1,2,3,4,5,6,7]
// const c= arr.map((item)=> {return item+10})
// console.log(c)
 
 const arr = [30, 40, 45, 50];

const c = arr
  .map(item => item + 10)    // [40, 50, 55, 60]
  .map(item => item + 1)     // [41, 51, 56, 61]
  .filter(item => item > 50); // [51, 56, 61]

console.log(c); // [51, 56, 61]

