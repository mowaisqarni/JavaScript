const score=100
console.log(score)

const bal=new Number(100)
console.log(bal)
console.log(bal.toFixed(2))

const otherNumbers=100.890
console.log(otherNumbers.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))

/// maths
console.log(Math.abs(-4))
console.log(Math.round(21.5))
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))
console.log(Math.min(4,3,6,2,1))
console.log(Math.max(5,3,6,2,1))


console.log(Math.random())
console.log((Math.random()*10) +1)
console.log((Math.floor(Math.random()*10) +1))

const min =10
const max=20
console.log(Math.floor((Math.random() *(max - min +1)) + min ))