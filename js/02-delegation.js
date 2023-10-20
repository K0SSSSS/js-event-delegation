/*
 * Делегування подій
 * - загальний слухач
 * - фільтр цілі кліка
 */


const container = document.querySelector('.js-container')
container.addEventListener('click', onClick)

function onClick(e) {
    if (e.target.nodeName !== 'BUTTON'){
        return;
    }
    console.log(e.target.nodeName);
    // console.log(e.currentTarget.textContent);
}

const addBtn = document.querySelector('.js-add-btn')
let  btnLabel = 6
addBtn.addEventListener('click', onAddBtnClick)

function onAddBtnClick(e){
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.textContent = `Кнопка ${btnLabel}`
    container.appendChild(btn)
    btnLabel += 1
}

