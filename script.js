document.addEventListener('DOMContentLoaded', function() {
    const animals = ['cow', 'duck', 'cow', 'duck']; // Add more pairs of animals as needed
    const gameContainer = document.getElementById('game-container');

    // Shuffle and create cards
    shuffleArray(animals).forEach(animal => {
        gameContainer.appendChild(createCard(animal));
    });

    function createCard(animal) {
        const card = document.createElement('div');
        card.className = 'card';
        const img = document.createElement('img');
        img.src = `images/${animal}.jpg`; // Ensure you have images named 'cow.jpg', 'duck.jpg', etc.
        card.appendChild(img);

        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
            // Add any additional game logic here
        });

        return card;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});