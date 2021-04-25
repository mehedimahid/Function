//209 Introduction to Event in DOM Manupulation in Javascript 

let btn = document.getElementById('btn')
// btn.onclick = function(e){
//     console.log(e)
// }

// element add
let list = document.getElementById('list')
btn.addEventListener('click', function (e) {
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly Created Item'
    list.appendChild(item)
});



//209 Introduction to Event in DOM Manupulation in Javascript

let box = document.getElementById('box')

box.addEventListener('mousemove', function (e) {
    // console.log(e)
    //poro document anusare dekabe
    // document.getElementById('x-value').innerHTML = e.clientX
    // document.getElementById('y-value').innerHTML = e.clientY
    //offset box onusare obosthan dekabe
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    // if(e.offsetY === 50 && e.offsetX){
    //     alert('50 50')
    // }
});


// 210 Event Delegation in DOM Manipulation 
// [...list.children].forEach(li => {
//     li.addEventListener('click', function (e) {
//         e.target.remove()
//     })
// })

list.addEventListener('click', function(e){
    // console.log(this.contains(e.target))
    if(this.contains(e.target)){
        e.target.remove()
    }
})













