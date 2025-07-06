#Projects related to dom 
  ## Projects link 


#Solution code :
#Project 1


const buttons = document.querySelectorAll('.button')
const body =document.querySelector('body')

buttons.forEach(function(button)
{
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    const col=e.target.id;
    switch(col)
    {
      case 'grey':
      body.style.backgroundColor=col;
      break;
      case 'yellow':
      body.style.backgroundColor=col;
      break;
      case 'blue':
      body.style.backgroundColor=col;
      break;
      default:
      body.style.backgroundColor='white';
      break;

    }

  } )
})

#Project 2
const form = document.querySelector('form')


form.addEventListener('submit' ,function (e)
{
  e.preventDefault()
 const height=parseInt(document.querySelector('#height').value)
 const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('#results')
if(height < 0 || isNaN(height) || height ==="" )
{
  result.innerHTML = ("plz give a valid height")
}
else if(weight < 0 || isNaN(weight) || weight ==="" )
{
  results.innerHTML=("plz give a valid weight")
}
else{
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
}
})


#Project 3
let  clock=document.getElementById('clock')


setInterval(function()
{
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)
