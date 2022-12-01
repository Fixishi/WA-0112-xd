const guessNumber = document.getElementById('guessNumber');
const helpNumber = document.getElementById('helpNumber');
    const number = document.getElementById('number');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const message2 = document.getElementById('message2');

    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNumber);

    guessBtn.addEventListener('click', () => {
        if (number.value == randomNumber) {
            message.textContent = 'You guessed the number!';
        } else if (number.value > randomNumber) {
            message.textContent = 'Too high! THE NUMBER IS ' + randomNumber;
            document.getElementById("guessBtn").disabled = true;

        } else {
            message.textContent = 'Too low! THE NUMBER IS ' + randomNumber;
            document.getElementById("guessBtn").disabled = true;
        }
    });

    guessBtn2.addEventListener('click', () => {
        message2.textContent += "Modulo is:" + ' '+ randomNumber % helpNumber.value;
        console.log(randomNumber, helpNumber.value);
    });
 