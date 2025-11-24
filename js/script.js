//número aleatorio del 1 al 3: Math.floor(Math.random()*3 + 1)
// una cuenta atrás de 5 segundos que colocaremos en 'countdown' del HTML con setInterval().
//hay que traerse al DOM: 
    // userInput -> que es el placeholder 
    // countdown -> que es la cuenta atrás, con un mensaje `Cuenta atrás: ${} segundos`
    // result -> mensaje en el que aparecerán tu resultado y el de la máquina con dos opciones de mensaje-resultado:
        // `Tu número es ${} que es el mismo que ${}`
        //  `Tu número es ${} que no es el mismo que ${}`
        // Segunda línea: mensaje-motivación: Has salvado el mundo if x === x | La bomba ha estallado if x !== x
    // restart -> btn con un addEventListener que cuando 'click' reset valor e init cuenta atrás.

// a la vez salen userNumber y computerNumber


let userInput  = document.querySelector('#userInput')
let countdown  = document.getElementById('countdown')
let result     = document.getElementById('result')
let btnRestart = document.getElementById('restart')



userInput.addEventListener('input',() => {
  value = Number(userInput.value);
  if (value < 1 || value > 3 || isNaN(value)){
  (userInput.value = '');
  }
})

let computerNumber = Math.floor(Math.random() * 3 + 1)
let userNumber = userInput.value

//countdown = `Cuenta atrás: ${}sec`

const comparador = new Promise ((resolve) => {
  let count = 5
  const intervalID = setInterval(() => {
    countdown.innerText = `Cuenta atrás: ${count}sec`;
    count --;
    if (count < 0) {
      clearInterval(intervalID);
      
      const userNumber = userInput.value;
      const computerNumber = Math.floor(Math.random() * 3 + 1);
 
      resolve({userNumber, computerNumber});
    }
  }, 1000)
})



comparador .then(({userNumber, computerNumber}) => {
  if (userNumber === computerNumber) { 
    result.innerHTML = `Tu número es ${userNumber} que es el mismo que ${computerNumber}`;
  }else { (userNumber !== computerNumber)
    result.innerHTML = `Tu número es ${userNumber}, que es diferente a ${computerNumber}`};
})

alert(userNumber === computerNumber ? `¡Has salvado el mundo!` : `La bomba ha estallado`)


btnRestart.addEventListener('click', () => {
userInput.value = '';
  result.innerHTML = '';
  countdown.innerHTML = '';
});






/*const contador = new Promise(resolve) => {
  count = 5; //inicia la cuenta atrás
  let intervalID = setInterval() => {
    countdown.innerText = `Cuenta atrás: ${count}sec`;
    count--;
    if (count < 0 ) { clearInterval(intervalID)};
      userNumber = userInput.value; // coge el valor del input 
      computerNumber = Math.floor(Math.random() * 3 + 1); //genera un número aleatorio para la máquina
      console.log("Cuenta atrás finalizada");
      resolve({computerNumber, userNumber});
    }
}, 1000);
});*/



/*then (({userNumber, computerNumber}) => {
    alert(userNumber === computerNumber ? `¡Has salvado el mundo!` : `La bomba ha estallado`)
  if(userNumber === computerNumber) {
    result.innerHTML = `Tu número es ${userNumber} que es el mismo que ${computerNumber}`;
  } else {
    result.innerHTML = `Tu número es ${userNumber} que es diferenta a ${computerNumber}`
  }
})*/
