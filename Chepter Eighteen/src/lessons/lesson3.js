//203 Create DOM Elements in Javascript 
//204 Insert Adjacent Element in Javascript

// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.setAttribute('title', 'i am four item')
// li.innerHTML = 'Four'



let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'i am fourth item')

let list = document.getElementById('list')
list.appendChild(li)

// let p1 = createElement('p', 'Lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus voluptatum esse quos itaque beatae blanditiis sapiente,velit explicabo maxime reprehenderit aspernatur maioresaperiam similique dignissimos ipsam alias deleniti corporis optio.')
// let p2 = createElement('p', 'Lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus voluptatum esse quos itaque beatae blanditiis sapiente,velit explicabo maxime reprehenderit aspernatur maioresaperiam similique dignissimos ipsam alias deleniti corporis optio.')

// let div = createElement('div')
// append(div, [p1, p2])


//insertAdjacentElement() ar sahaje kono tag ke je kono jaygay bosano jay

// list.insertAdjacentElement('beforebegin', div) //beforebegin ul tag ar age asbe
// list.insertAdjacentElement('afterbegin', div) //ul tag ar sob element ar prothome  asbe
// list.insertAdjacentElement('afterend', div)//ul tag ar pore asbe
// list.insertAdjacentElement('beforeend',div)// ul tag ar sob element as sese bosbe

// let container = document.getElementById('cont')
// container.appendChild(div)

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''
    return tag

}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}


//205 Update and Remove any DOM Elements in Javascript 

let firstChild = list.firstElementChild

setTimeout(() => {
    firstChild.innerHTML = firstChild.innerHTML + '(Modified)'
    // firstChild.innerHTML = '(Modified)'
    firstChild.classList.add('text-success')//text-success bootstrap class 
    // firstChild.style.background = 'green'
}, 5000)

// setTimeout(() =>{
//     list.lastChild.remove()
// },3000)


//206 How to Clone Node Include It's Child Elements in Javascript

let lastItem = list.lastElementChild.cloneNode(true)//true dile poro tag tai clone hobe.
//nadile vitorer text bade clone hobe
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)



        //207 How to Deal with Attributes in DOM Manipulation in Javascript










