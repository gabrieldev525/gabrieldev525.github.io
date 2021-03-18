const PROJECT_TYPE_SITES = 1
const PROJECT_TYPE_APPS = 2
const PROJECT_TYPE_UIUX = 3

let currentProjectType = PROJECT_TYPE_SITES

const projectsByType = {
  [PROJECT_TYPE_SITES]: [
    {
      title: 'Nome do projeto',
      image: './images/projeto_1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
  ],
  [PROJECT_TYPE_APPS]: [

  ],
  [PROJECT_TYPE_UIUX]: [

  ]
}

const projectsTypeButtonId = {
  [PROJECT_TYPE_SITES]: 'project-type-site',
  [PROJECT_TYPE_APPS]: 'project-type-app',
  [PROJECT_TYPE_UIUX]: 'project-type-ui-ux',
}

const renderProjectType = () => {
  // Project list
  const projectsList = document.getElementsByClassName('project-list')[0]
  projectsList.innerHTML = ''

  if(projectsByType[currentProjectType].length == 0) {
    const noResult = document.createElement('span')
    noResult.innerText = 'Nenhum projeto encontrado nessa categoria'
    noResult.classList.add('no-result')
    projectsList.appendChild(noResult)

    return
  }

  for(let item of projectsByType[currentProjectType]) {

    const itemDiv = document.createElement('div')
    itemDiv.classList.add('item')

    const image = document.createElement('img')
    image.src = item.image
    itemDiv.appendChild(image)

    const info = document.createElement('div')
    info.classList.add('info')

    const projectName = document.createElement('h1')
    projectName.classList.add('name')
    projectName.innerText = item.title
    info.appendChild(projectName)

    const projectDescription = document.createElement('span')
    projectDescription.classList.add('description')
    projectDescription.innerText = item.description
    info.appendChild(projectDescription)

    itemDiv.appendChild(info)

    projectsList.appendChild(itemDiv)
  }
}

const setProjectType = (type) => {
  currentProjectType = type

  document.getElementById(projectsTypeButtonId[type]).classList.add('active')
  Object.keys(projectsTypeButtonId).filter(key => key != type).forEach(key => {
    const id = projectsTypeButtonId[key]
    document.getElementById(id).classList.remove('active')
  })

  renderProjectType()
}

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

  // Side menu
  const sideMenuButton = document.getElementById('side-menu-button')
  const sideMenuContent = document.getElementById('side-menu')
  sideMenuButton.onclick = () => {
    sideMenuContent.style.display = 'flex';
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
  }
  const sideMenuCloseButton = document.getElementById('close-side-menu')
  sideMenuCloseButton.onclick = () => {
    sideMenuContent.style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
  }

  const sideMenuItem = document.getElementsByClassName('side-menu-item')
  for(let item of sideMenuItem) {
    item.onclick = () => {
      sideMenuContent.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    }
  }

  // Projects
  renderProjectType()

  const siteButton = document.getElementById(projectsTypeButtonId[PROJECT_TYPE_SITES])
  siteButton.onclick = () => setProjectType(PROJECT_TYPE_SITES)

  const appButton = document.getElementById(projectsTypeButtonId[PROJECT_TYPE_APPS])
  appButton.onclick = () => setProjectType(PROJECT_TYPE_APPS)

  const uiuxButton = document.getElementById(projectsTypeButtonId[PROJECT_TYPE_UIUX])
  uiuxButton.onclick = () => setProjectType(PROJECT_TYPE_UIUX)
}
