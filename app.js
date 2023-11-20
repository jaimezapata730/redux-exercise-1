const face = document.getElementById('face')
const happyBtn = document.getElementById('happy');
const sadBtn = document.getElementById('sad');
const angryBtn = document.getElementById('angry');
const confusedBtn = document.getElementById('confused');

happyBtn.addEventListener('click', function(e) {
    store.dispatch ({ type: 'HAPPY', payload: 'ʘ‿ʘ' });
    const state = store.getState();
    face.innerHTML = state.face;
});

sadBtn.addEventListener('click', function(e) {
    store.dispatch ({ type: 'SAD', payload: '⊙︿⊙' });
    const state = store.getState();
    face.innerHTML = state.face;
});

angryBtn.addEventListener('click', function(e) {
    store.dispatch ({ type: 'ANGRY', payload: 'ಠ╭╮ಠ' });
    const state = store.getState();
    face.innerHTML = state.face;
});

confusedBtn.addEventListener('click', function(e) {
    store.dispatch ({ type: 'HAPPY', payload: '●.◉' });
    const state = store.getState();
    face.innerHTML = state.face;
});