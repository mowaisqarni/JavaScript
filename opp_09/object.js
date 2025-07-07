function createUser(username,score)
{
    this.username=username
    this.score=score
}
createUser.prototype.increment=function()
{
    this.score++
}
createUser.prototype.printme=function()
{
     console.log(this.score)
}
const chai=new createUser("chai",25)
const tea=new createUser("owais",26)

chai.printme()
tea.printme()
