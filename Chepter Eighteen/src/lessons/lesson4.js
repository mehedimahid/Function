            //208 Style in DOM in Javascript

// let title = document.getElementById('title')
// title.style.color = 'orange'
// // title.style.color = '#f00'
// // title.style.color = 'rgb(255, 255,0)'
// title.style.fontSize = '4rem'//px deya jabe
// title.style.background = '#000'

let listObj = {
    color: '#efefef',
    fontSize: '4rem',
    background: 'black',
    borderColor: 'white'
}

let list = document.getElementById('list');

[...list.children].forEach(li =>Object.assign(li.style, listObj))
