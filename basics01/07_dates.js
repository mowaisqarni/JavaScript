let mydate =new Date
console.log(mydate)
console.log(mydate.toDateString())
console.log(typeof(mydate))

let myowndate=new Date(2024,1,15)
console.log(myowndate.toDateString())


let myondate=new Date("2024-02-15")
console.log(myondate.toDateString())

let myodate=new Date("15-02-2025")
console.log(myondate.toDateString())

let mystamp=Date.now()
console.log(mystamp)

console.log(myodate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate =new Date();
console.log(newDate.toLocaleDateString())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleString ( 'default' {
    weekday :"long",

})
