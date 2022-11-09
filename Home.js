const buttonOpen = document.getElementsByClassName('button')[0]
const navbarList = document.getElementsByClassName('navbar')[0]

buttonOpen.addEventListener('click', () => {
  navbarList.classList.toggle('active')
})