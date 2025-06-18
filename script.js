const heading = document.querySelector('h1')

heading.textContent = 'DOM Manipulation'

const list = document.querySelectorAll('ol > li')
list[3].textContent = 'charAt'
list[2].textContent = 'toUpperCase'
list[0].textContent = 'replace'
list[1].textContent = 'toLowerCase'

const listM = document.getElementsByClassName('method')

listM[0].textContent = 'split'
listM[1].textContent = 'indexOf'

const lastM = document.querySelector('li:nth-of-type(9)')

lastM.textContent = 'replaceAll'

const lists = document.getElementsByTagName('li')
lists[4].textContent = 'startsWith'
lists[5].textContent = 'includes'
lists[9].textContent = 'endsWith'

const title = document.getElementById('title')

title.innerHTML = 'All the <span style="color:blue; text-decoration: underline;">main string methods</span>'

document.body.style.backgroundImage = `linear-gradient(to right, rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)}) 45%, #f1c 45%)`

document.body.style.background = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`

title.style.paddingBlock = '2rem'
title.style.border = '12px solid crimson'