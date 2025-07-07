let myheros = ["owais","qarni"];
let mychnl={
    owais :"leetcoder",
    power :"family",
    getspidepower()
    {
        console.log(`qarni is ${this.power}`)

    }
}
Object.prototype.hitesh=function()
{
console.log("hitesh is present in on all objects")
}
//mychnl.hitesh()
myheros.hitesh();

const user={
    user:'chai'
}
const teacher={
    makevid:true
}
const teachingsupport={
    isavail:true
}
const ta={
    fulltime:true,
    make:'make assignment',
    __proto__: teachingsupport
}
teacher.__proto__=user
//modern syntax
Object.setPrototypeOf(teachingsupport,teacher)

let anotheruser="owais     ";
String.prototype.trueLength =function()
{
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`true length is : ${this.trim().length}`)
}
anotheruser.trueLength()
"ali".trueLength()