/*
 * Делегування
 * - один з багатьох
 * - декілька з багатьох
 */

//*!один з багатьох
// const tagsContainer = document.querySelector('.js-tags')
// let selectedTag = null



// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(e){
//     if(e.target.className !== "tags__btn"){
//         return
//     }
// const currentActiveBtn = document.querySelector('.tags__btn--active')
// console.log(currentActiveBtn);
// if(currentActiveBtn){
// currentActiveBtn.classList.remove("tags__btn--active")
// }


// console.log('click');

//     const nextActiveBtn = e.target;
//     console.log(nextActiveBtn);
//     nextActiveBtn.classList.add("tags__btn--active")
//     selectedTag = nextActiveBtn.dataset.value
//     console.log(selectedTag);
// }
//*!декілька з багатьох
const tagsContent = document.querySelector('.js-tags')
  let selectedTag = []

  tagsContent.addEventListener('click', onTagsContainerClick)

  function onTagsContainerClick(e){
    if(!e.target.classList.contains("tags__btn")){
      return
    }
    const currentActiveBtn = e.target
    e.target.classList.toggle('tags__btn--active')
    
    const isActive = e.target.classList.contains('tags__btn--active')
    const tag = e.target.dataset.value

    selectedTag = isActive ? selectedTag.concat([tag]) : selectedTag.filter(i=>i!=tag)
    console.log(selectedTag)
  }






