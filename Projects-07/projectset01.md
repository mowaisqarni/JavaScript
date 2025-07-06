#Projects related to dom 
  ## Projects link 


#Solution code 
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