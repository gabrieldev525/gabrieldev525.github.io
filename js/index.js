window.onload = () => {
  window.onscroll = () => {
    let y = window.pageYOffset

    let menu = document.getElementById('menu')
    let header = document.getElementById('header')
    if(y > header.style.height / 2)
      menu.classList.add('menu-secondary')
    else
      menu.classList.remove('menu-secondary')
  }
}