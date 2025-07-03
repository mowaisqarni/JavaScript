let st=new String ('owais')

console.log(st[0])
console.log(st.__proto__);
console.log(st.toUpperCase())
console.log(st.length)
console.log(st.charAt(2))
console.log(st.indexOf('o'))

let ns=st.substring(0,4)
console.log(ns)

let newsting=st.slice(-5,4)
console.log(newsting)

const newStringOne="    qarni   "
console.log(st.trim())

const url="https://special-waffle-x5r7j67qjj753pxq4.github.dev/"
console.log(url.replace('.dev' , '-'))

console.log(url.includes('special'))
ns="owais-qarni"
console.log(ns.split('-'))
