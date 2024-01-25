document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const animals = ['duck', 'cow'];

    // Create two of each card for a simple game
    animals.concat(animals).forEach(animal => {
        const cardElement = createCardElement(animal);
        gameContainer.appendChild(cardElement);
    });

    function createCardElement(animal) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const img = document.createElement('img');
        img.src = `images/${animal}.jpg`; // Make sure the images are in an 'images' folder
        img.alt = animal; // Accessibility for screen readers
        
        card.appendChild(img);

        card.addEventListener('click', () => {
            card.classList.add('flipped');
        });

        return card;
    }
});
