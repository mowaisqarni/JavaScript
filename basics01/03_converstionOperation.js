let score="3abc"
let score2= null
let score3= true;
console.log (typeof(score));

let val_in_num=Number (score);
console.log(typeof(val_in_num));
console.log(val_in_num);

//here score2 is assign to val_in_num
 val_in_num=Number (score2);
console.log(typeof(val_in_num));
console.log(val_in_num);


//here score2 is assign to val_in_num
 val_in_num=Number (score3);
console.log(typeof(val_in_num));
console.log(val_in_num);


// "2abc" =>Nan
// "2"  =>2
// true  =>1 , false=>0;

let isloggedin="";
let boolisloggedin = Boolean(isloggedin)
console.log(boolisloggedin)


// 1=>true , 0=>false;
// ""=>false
// "Owais" =>true


// ************operations*****************

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)  //power 
 

let str1="owais "
let str2="Qarni"
let str3=str1+str2;
console.log(str3);

console.log(1 + "2")
console.log( "1" + 2)
console.log("1" +2+2)
console.log(1 +2+ "2")

 
console.log(+null)

let a=1
let b=++a

console.log( ` a =${a}  , b=${b}` )



