window.gameData = {
    gameLevel: {},
}

const difficultySelection = document.querySelector('.difficulty-selection');
const difficultySelectionLevels = document.querySelector('.difficulty-selection-levels');
const difficultySelectionLevelsItems = document.querySelectorAll('.difficulty-selection-levels-item');
const levelItems = document.querySelectorAll('.item-level');
const difficultySelectionStart = document.querySelector('.difficulty-selection-start');
const play = document.querySelector('.play');
const game = document.querySelector('.game');

let level;
play.addEventListener('click', () => {
    levelItems.forEach(elem => {
        if (elem.checked) {
            level = elem.value;
            window.gameData.gameLevel['level'] = level;
        }
    });

    difficultySelection.classList.add('hidden');
    if (level === '1') {
        game.textContent = 'выбран 1 уровень';
        game.classList.remove('hidden')
    }
    else if (level === '2') {
        game.textContent = 'выбран 2 уровень';
        game.classList.remove('hidden')
    }
    else if (level === '3') {
        game.textContent = 'выбран 3 уровень';
        game.classList.remove('hidden')
    }
    else {
        const infoBg = document.createElement('div');
        infoBg.classList.add('info-bg');
        const info = document.createElement('div');
        info.classList.add('info');
        const infoTitle = document.createElement('h1');
        infoTitle.classList.add('title');
        infoTitle.textContent = 'Вы не выбрали уровень!';
        const infoClose = document.createElement('img');
        infoClose.classList.add('info-close');
        infoClose.src = 'img/close.svg';
        document.body.appendChild(infoBg);
        infoBg.appendChild(info);
        info.appendChild(infoTitle);
        info.appendChild(infoClose);
        infoClose.addEventListener('click', () => {
            infoBg.classList.add('hidden');
            difficultySelection.classList.remove('hidden');
        });
    }
});

