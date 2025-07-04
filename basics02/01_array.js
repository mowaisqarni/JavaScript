const array=[0,1,2,3,4]
const myarray=["M-bin-qasim" ,"Badar"]

const myarr=new Array (1,2,3,4,5)

console.log(myarr[0]);
myarr.push(6);
console.log(myarr);


myarr.unshift(9);
myarr.shift();
console.log(myarr);
console.log(myarr.includes(9))
console.log(myarr.indexOf(9))

const arr2=myarr.join()
console.log(arr2)
console.log(typeof arr2)


console.log("A" ,myarr)
 const arr3=myarr.slice(1,3)
 console.log( arr3)
console.log("B" ,myarr)
 const arr4=myarr.splice(1,3)
 console.log("C" ,myarr)
 console.log(arr4)


 const heros=["badar" ,"qasim ", "zain"]
 const cp=["wasif" ,"zubaor" ,"Shariyar"]


 heros.push(cp)
 console.log(heros[3][1])

 const alh=heros.concat(cp);
 console.log(alh);

 const al_new_heros=[...heros,...cp]
 console.log(al_new_heros)


 const newarr=[1,3,[4,5,6] ,7]
 const dupnewarr=newarr.flat(Infinity)
 console.log(dupnewarr)

 console.log(Array.isArray("owais"))
 console.log(Array.from("owais"))

 const s1=100;
 const s2=200;
 const  s3=300;

 console.log(Array.of(s1,s2,s3))
