            //201 How to Traverse DOM Elements in Javascript

// let list = document.getElementById('list')

// console.log(list)
// console.log(list.parentElement)

// console.log(list.children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)


// let li = document.querySelector('li')
// console.log(li.previousElementSibling)
// console.log(li.nextElementSibling)


// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

let listItem = document.getElementsByTagName('li')      //like array not array
// // console.log(listItem)       

// let listItems = Array.from(listItem)        //Array
// let listItems = Array.prototype.slice.apply(listItem)
let listItems = [...listItem]       //only ES6

listItems.forEach((li ,index) =>{
    let text = li.innerHTML
    li.innerHTML =`(${index + 1}) ${text}`
})





