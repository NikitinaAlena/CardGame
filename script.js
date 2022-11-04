const difficultySelection = document.querySelector('.difficulty-selection');
const difficultySelectionLevels = document.querySelector('.difficulty-selection-levels');
const buttonLevels = document.querySelectorAll('.button-level');
const difficultySelectionStart = document.querySelector('.difficulty-selection-start');
const play = document.querySelector('.play');
const game = document.querySelector('.game');

let level;
buttonLevels.forEach(elem => {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
        level = this.dataset.id;
        localStorage.setItem('level', level);
    });
});

play.addEventListener('click', () => {
    if (!localStorage.level) {
        difficultySelection.classList.add('hidden');
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
    else {
        difficultySelection.classList.add('hidden');
        game.classList.remove('hidden');
        if (level === '1') {
            game.textContent = 'выбран 1 уровень';
        }
        else if (level === '2') {
            game.textContent = 'выбран 2 уровень';
        }
        else if (level === '3') {
            game.textContent = 'выбран 3 уровень';
        }
    }
});

