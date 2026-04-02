const gameGrid = document.getElementById('gameGrid');

const games = [
    { name: "Basket Random", url: "https://www.twoplayergames.org/embed/basket-random", thumbnail: "https://images.twoplayergames.org/files/games/other/Basket_Random/basket-random.jpg" },
    { name: "Drift Hunters Pro", url: "https://www.onlinegames.io/games/2023/unity/drift-hunters-pro/index.html", thumbnail: "https://www.onlinegames.io/media/posts/397/responsive/Drift-Hunters-Pro-lg.jpg" },
    { name: "BasketBall Io", url: "https://www.onlinegames.io/games/2022/unity3/basketball-io/index.html", thumbnail: "https://www.onlinegames.io/media/posts/302/responsive/Basketball-io-2-lg.jpg" },
    { name: "House Of Hazards", url: "https://www.twoplayergames.org/embed/house-of-hazards", thumbnail: "https://images.twoplayergames.org/files/games/o1/House_of_Hazards/house-of-hazards.jpg" },
    { name: "Getaway Shootout", url: "https://www.twoplayergames.org/embed/getaway-shootout", thumbnail: "https://images.twoplayergames.org/files/games/other/Getaway_Shootout/getaway-shootout-v2.jpg" },
    { name: "Rooftop Snipers", url: "https://www.twoplayergames.org/embed/rooftop-snipers", thumbnail: "https://images.twoplayergames.org/files/games/other/Rooftop_Snipers/rooftop-snipers-v5.jpg" },
    { name: "Cat Simulator", url: "https://www.onlinegames.io/games/2022/unity4/cat-simulator/index.html", thumbnail: "https://www.onlinegames.io/media/posts/330/responsive/Cat-Simulator-Online-lg.jpg" },
    { name: "G-Switch 3", url: "https://www.twoplayergames.org/embed/g-switch-3", thumbnail: "https://images.twoplayergames.org/files/games/other/G-Switch_3/g-switch-3-v4.jpg" },
    { name: "BasketBall Stars", url: "https://www.twoplayergames.org/embed/basketball-stars-2026", thumbnail: "https://images.twoplayergames.org/files/games/other/basketball-stars-2026.jpg" },
    { name: "Fire Boy & Water Girl", url: "https://www.twoplayergames.org/embed/fire-and-water", thumbnail: "https://images.twoplayergames.org/files/games/other/Fire-And-Water-v2.jpg" },
    { name: "MX Offroad Master", url: "https://www.twoplayergames.org/embed/mx-offroad-master", thumbnail: "https://images.twoplayergames.org/files/games/other/MX-offroad-master-2.jpg" },
    { name: "Dark Ninja Hanjo", url: "https://www.onlinegames.io/games/2023/unity/dark-ninja-hanjo/index.html", thumbnail: "https://www.onlinegames.io/media/posts/451/responsive/Dark-Ninja-Hanjo-lg.jpg" },
    { name: "Funny Shooter Bro", url: "https://www.onlinegames.io/games/2024/unity/funny-shooter-bro/index.html", thumbnail: "https://www.onlinegames.io/media/posts/735/responsive/Funny-Shooter-Bro-lg.jpg" },
    { name: "Magic Tiles 3", url: "https://www.twoplayergames.org/embed/magic-tiles-3", thumbnail: "https://images.twoplayergames.org/files/games/other/magic-tiles-3.jpg" },
    { name: "Geometry Vibes", url: "https://www.twoplayergames.org/embed/geometry-vibes", thumbnail: "https://images.twoplayergames.org/files/games/g1/geometry-vibes-v11/geometry-vibes.jpg" },
    { name: "Wheelie Bike 2P", url: "https://www.twoplayergames.org/embed/wheelie-bike-2p", thumbnail: "https://images.twoplayergames.org/files/games/other/wheelie-bike-2p.jpg" },
    { name: "Age Of War", url: "https://www.addictinggames.com/embed/html5-games/20398", thumbnail: "https://static.keygames.com/9/69589/82612/672x378/age-of-war.webp" },

    // Placeholder / custom slots (replace later if needed)
    { name: "Game 18", url: "https://example.com/game18", thumbnail: "images/game18.jpg" },
    { name: "Game 19", url: "https://example.com/game19", thumbnail: "images/game19.jpg" },
    { name: "Game 20", url: "https://example.com/game20", thumbnail: "images/game20.jpg" },
    { name: "Game 21", url: "https://example.com/game21", thumbnail: "images/game21.jpg" },
    { name: "Game 22", url: "https://example.com/game22", thumbnail: "images/game22.jpg" },
    { name: "Game 23", url: "https://example.com/game23", thumbnail: "images/game23.jpg" },
    { name: "Game 24", url: "https://example.com/game24", thumbnail: "images/game24.jpg" },
    { name: "Game 25", url: "https://example.com/game25", thumbnail: "images/game25.jpg" }
];

games.forEach((game) => {
    const card = document.createElement('div');
    card.classList.add('gameCard');

    card.innerHTML = `
        <h2>${game.name}</h2>
        <img class="gameThumbnail" src="${game.thumbnail}" alt="${game.name}">
        <button class="startButton">Start</button>
        <button class="stopButton">Stop</button>
        <div class="gameContainer">
            <iframe class="gameFrame" allowfullscreen></iframe>
            <button class="fullscreenButton">Fullscreen</button>
        </div>
    `;

    gameGrid.appendChild(card);

    const startButton = card.querySelector('.startButton');
    const stopButton = card.querySelector('.stopButton');
    const gameContainer = card.querySelector('.gameContainer');
    const gameFrame = card.querySelector('.gameFrame');
    const fullscreenButton = card.querySelector('.fullscreenButton');
    const thumbnail = card.querySelector('.gameThumbnail');

    startButton.addEventListener('click', () => {
        if (gameFrame.src !== game.url) {
            gameFrame.src = game.url;
        }
        gameContainer.style.display = 'block';
        thumbnail.style.display = 'none';
        card.scrollIntoView({ behavior: "smooth" });
    });

    stopButton.addEventListener('click', () => {
        gameFrame.src = 'about:blank';
        gameContainer.style.display = 'none';
        thumbnail.style.display = 'block';
    });

    fullscreenButton.addEventListener('click', () => {
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.webkitRequestFullscreen) {
            gameContainer.webkitRequestFullscreen();
        } else if (gameContainer.msRequestFullscreen) {
            gameContainer.msRequestFullscreen();
        }
    });

    thumbnail.addEventListener('click', () => {
        startButton.click();
    });
});
