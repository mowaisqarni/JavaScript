const prof={
    username:"owais",
    price:"1999",
    welcome:function ()
    {
        console.log(`welcome ${this.username} on this website . `)
        console.log(this)
    }

}
// prof.welcome()
// prof.username="sam"
// prof.welcome()
console.log(this)

// const chai = function()
// {
//     let username="name"
//     console.log(this.name)
// }

const chai = ()=>
{
    let username="name"
    console.log(this)
}
chai()

// const addtwo =( num1 ,num2 ) =>( num1 + num2)
const addtwo =( num1 ,num2 ) =>( {name:"owais" ,age:19})

console.log(addtwo(1,2))
 