let body = document.querySelector('body');

body.style.display = 'flex'
body.style.height = '100vh'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.backgroundColor= prompt('rang kirit ingiliz tilidg')

let ism = document.createElement('h1')
ism.innerHTML = prompt('ism kiritng')
body.appendChild(ism)