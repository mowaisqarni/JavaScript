const username=[]
if(username)
{
console.log("user log in ")
}
else{
console.log(" not allow to user log in ")
}
///falsy value
//false ,0 ,-0,BigInt 0n ,"", Nan, NULL,undefined
// truthy
// true "0",'false'," ",[],{},function(){}
if(username.length==0)
{
    console.log("empty array")
}

const obj ={

}
if(Object.keys(obj).length==0)
{
console.log("empty obj")
}
// Nullish coalescing operator (?? ) : null  undefined 
val1 = 5??10
console.log(val1)
val1 = 5??NULL
console.log(val1)
// Ternary operator
// condition ?true :false
const i=1
i<2 ? console.log("lass then 2") : console.log("greater or equal")