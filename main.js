const MAX_DICE = 20;
const MAX_FACES = 9;
const $anzahl = document.querySelector('#anzahl');
const $seiten = document.querySelector('#seiten');

// dice logic
const $diceContainer = document.querySelector('.dice-container')
const $bu_roll = document.querySelector('button.roll')
$bu_roll.onclick = () => {
    const anzahl = Math.max(Math.min($anzahl.value,MAX_DICE),1);
    const faces = Math.max(Math.min($seiten.value,MAX_FACES),1);
    $diceContainer.innerHTML = '';
    for(let i=1; i<=anzahl; i++) {
        $diceContainer.innerHTML += `<div class="face face-${i}">${'<span class="pip"></span>'.repeat(Math.floor(Math.random()*faces)+1)}</div>`;
    }
}

// add options
for(let i=1; i<=MAX_DICE; i++) {
    $anzahl.innerHTML += `<option value="${i}">${i} Würfel</option>`
}
$anzahl.value='6';

for(let i=1; i<=MAX_FACES; i++) {
    $seiten.innerHTML += `<option value="${i}">${i} Seite${i==1 ? '' : 'n'}</option>`
}
$seiten.value='6';




