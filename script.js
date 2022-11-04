// const difficultySelection = document.querySelector('.difficulty-selection');
// const difficultySelectionLevels = document.querySelector('.difficulty-selection-levels');
const level = document.querySelector('.level');

const MONTHS = ["Январь", "Февраль"];
function test() {
    const a = prompt('число');
    const m = MONTHS[a];
    if (!m) {
        console.log('ytn');
        return;
    }
    return m;
}