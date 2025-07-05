function myname(){
    console.log("owais")
}
myname()

// function cal(Number1,Number2){
//     console.log(Number1+Number2)

// }
// function cal(Number1,Number2){
//     return (Number1+Number2)

// }
// const a=cal(2,3)
// console.log(a)

function fn(username="sam")
{
    if(!username)
    {
        console.log("plz enter username")
        return
    }
    return `my username is ${username}` 
}
console.log(fn("owais"))

function calculate(num2,num3,...num1)
{
    console.log(num1)
}
calculate(2,3,4)


const obj ={
    name:"owais",
    age:"18"
}
function objshow(anyobj)
{
    console.log(`my name is ${anyobj.name} and my age is ${anyobj.age}`)
}
objshow(obj)
objshow({
    name:"haseeb",
    age:24
})
const arry=[1,2,3,4,5]
function show(arr)
{
     return arr[2];
}
console.log(show(arry))
console.log(show([6,7,8]))