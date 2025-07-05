const arr=[1,2,3,4]
 
for (const i of arr) {
    console.log(i)
}

const st="Hllo world!"
for(const i of st)
{
    console.log(i)
}

const map=new Map()
map.set('in' ,"India")
map.set('US' ,"United state")

for(const [key,value] of map)
{
    console.log(key,value)
}

const obj ={
    cpp:'c++',
    ruby:'ruby on rails',
    js:'javascript'
}
for (const key in obj) {
     console.log(` ${key} => ${obj[key]}`)
}