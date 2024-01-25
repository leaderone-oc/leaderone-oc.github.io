document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    let hasFlippedCard = false;
    let firstCard, secondCard;
    let lockBoard = false;

    // Cards array
    let animals = ['duck', 'cow', 'duck', 'cow'];

    // Shuffle function using Fisher-Yates (Durstenfeld) shuffle algorithm
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Call shuffle
    shuffle(animals);

    // Create cards
    animals.forEach(animal => {
        const cardElement = createCardElement(animal);
        gameContainer.appendChild(cardElement);
    });

    function createCardElement(animal) {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = `images/${animal}.jpg`; // Images in 'images' folder
        img.alt = animal;

        card.appendChild(img);
        card.setAttribute('data-animal', animal);

        card.addEventListener('click', handleCardClick);

        return card;
    }

    function handleCardClick(event) {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.add('flipped');

        if (!hasFlippedCard) {
            // First click
            hasFlippedCard = true;
            firstCard = this;
        } else {
            // Second click
            secondCard = this;
            checkForMatch();
        }
    }

    function checkForMatch() {
        let isMatch = firstCard.getAttribute('data-animal') === secondCard.getAttribute('data-animal');

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', handleCardClick);
        secondCard.removeEventListener('click', handleCardClick);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
});
