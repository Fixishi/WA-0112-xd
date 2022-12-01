const guessNumber = document.getElementById('guessNumber');
    const number = document.getElementById('number');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

    guessBtn.addEventListener('click', () => {
        if (number.value == randomNumber) {
            message.textContent = 'You guessed the number!';
        } else if (number.value > randomNumber) {
            message.textContent = 'Too high!';
        } else {
            message.textContent = 'Too low!';
        }
    });