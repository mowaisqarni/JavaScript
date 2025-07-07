class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
   static  createid()
    {
        return `123`
    }
}
const chai=new  User("hitesh")
//console.log(chai.createid())

class teacher extends User
{
    constructor(username ,email){
        super(username)
        this.email = email

    }

}
const iphone = new teacher("iphone","apple@gmail.com")
console.log(iphone.createid())