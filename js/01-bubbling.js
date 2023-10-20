/*
 * Всплиття подій
 * event.target - цільовий (вихідний) елемент | Там де сталася подія
 * event.currentTarget - поточний елемент, на слухачі якого зловила подія
 */

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child')

}

refs.parent.addEventListener('click', onParentClick)
refs.child.addEventListener('click', onChildClick)
refs.innerChild.addEventListener('click', onInnerChildClick)


function onParentClick(e){
    console.log('OnParentClick');
    console.log('OnParentClick -> e.target', e.target);
    console.log('OnParentClick -> e.currentTarget', e.currentTarget);
}

function onChildClick(e){
    console.log('OnChildClick');
    console.log('OnChildClick -> e.target', e.target);
    console.log('OnChildClick -> e.currentTarget', e.currentTarget);
}

function onInnerChildClick(e){
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> e.target', e.target);
    console.log('onInnerChildClick -> e.currentTarget', e.currentTarget);
}
