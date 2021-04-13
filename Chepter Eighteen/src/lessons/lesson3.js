            //203 Create DOM Elements in Javascript 

let li = document.createElement('li')
li.className = 'list-group-item'
li.setAttribute('title', 'i am four item')
li.innerHTML = 'Four'

let list = document.getElementById('list')
list.appendChild(li)