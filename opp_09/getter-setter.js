class user 
{
    constructor(name , password)
    {
        this.name=name
        this.password=password
    }
    get password()
    {
        return `${this._password}hit`
    }
     set password(password)
    {
    this._password = password
    }
}
const chai = new user("owais" ,"abs")
console.log(chai.password)