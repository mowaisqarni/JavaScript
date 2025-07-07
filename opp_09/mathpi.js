const descriptor =Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor)
// console.log(Math.PI)
// Math.pi=5
// console.log(Math.PI)
const chai ={
    name:'ginger',
    price:250,
    isavailable :true,
    function ()
    {
      console.log("chai nhi bni")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

 Object.defineProperty(chai, "name", {
  writable: true,
  enumerable: true
});

for(let [key ,value] of Object.entries(chai))
{
  if(typeof value !== 'function')
  {
    console.log(`${key} : ${value}`)
  }
}