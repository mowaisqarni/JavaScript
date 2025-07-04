// // singleton objects create with constructor

// // objects literals
// const mysym=Symbol("mykey")

// const obj ={
//     name:"Hitesh",
//     age: 18,
//     [mysym] :"myeky1",
//     email :"hitesh@gmail.com",
//     isloggedin: false,
//     lastlogin: ["Monday","Tuesday"]
// }

// console.log(obj.email)
// console.log(obj["email"])
// console.log(obj["mysym"])
// obj.email="owaisqarni@gmail.com";
// Object.freeze(obj)
// obj.email="owaisqarni1975@gmail.com";
// console.log(obj.email)
// console.log(obj)

//  obj.greeting = function(){
//   console.log("hello js");
// };
// obj.greetingTwo = function(){
//   console.log(`hello js this is my name ${name}`);
// };

// // Both method additions silently fail because `obj` is frozen:
// console.log(obj.greeting);       // undefined
// console.log(obj.greetingTwo);    // undefined


// singleton 
const obj=new Object();
obj.name="owais"
obj.age=21
obj.email="owaisqarni@gmail.com"

// non singleton 
 
console.log(obj)

const regularobj ={
  email: "owaisqarni@gmail.com",
  fullname : {
    firstname :"Owais",
    lastname :"qarni"
  }

}
console.log(regularobj.fullname.firstname)

const obj1 ={1:"a ", 2:"b"}
const obj2={3:"c ", 4:"d"}
obj3={...obj1, ...obj2}
console.log(obj3);
//   obj3=Object.assign(obj1,obj2)
// console.log(obj3)

// const user=[
//   {
//     id:"12",
//     mail:"owais@gmail.com",
//   },
//   {
//     id:"12",
//     mail:"owais@gmail.com",
//   },
//   {
//     id:"12",
//     mail:"owais@gmail.com"
//   }
// ]
// console.log(user[1].mail)
// console.log(Object.values(obj))
// console.log(obj.hasOwnProperty('isloggedin'))

const oobj = {
  name:"owais",
  rollno:"22f-3058"
}
const{rollno:rl }=oobj
console.log(rl)


{
  "name":"owais",
  "course":"chai with hindi",
  "price":"free"
}
[
  {

  }
  {

  }
  {
    
  }
]