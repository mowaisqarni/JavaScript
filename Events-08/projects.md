#project 1  KeyBorad
 const insert=document.getElementById('insert')
 window.addEventListener('keydown',(e)=>{
   insert.innerHTML =`
   <div class ='color'>
   <table>
   <tr>
     <th>Key</th>
     <th>KeyCode</th>
     <th>Code</th>
   </tr>
   <tr>
     <td> ${e.key}</td>
     <td> ${e.keyCode}</td>
     <td> ${e.code}</td>
   </tr>
    </div>
 </table>`;
 })


# Project 2 Background  unlimited Changing color 
let randomColor = function()
{
  const hex="123456789ABCDEF";
  let color="#"
  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor(Math.random ()*16)];
  }
  return color 
}
let internal=""
const startChangingColor = function () {
  if(!internal)
  {
  internal=setInterval(c,1000)
  }
  function c(){
  document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(internal)
  internal=null
   

  
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
