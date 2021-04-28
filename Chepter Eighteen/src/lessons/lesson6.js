// 211 Input Box Event Handling in Javascript

let names = document.getElementById('name')

names.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('show-name').innerHTML = `Your name is ${e.target.value}`
        e.target.value = ''
    }
})



let skills = document.getElementsByName('skills')
let result = document.getElementById('result')

let checkedskills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        // console.log(event.target.checked)
        if (event.target.checked) {
            checkedskills.push(event.target.value)
            outputskills(result, checkedskills)
        } else {
            let ind = checkedskills.indexOf(event.target.value)
            checkedskills.splice(ind, 1)
            outputskills(result, checkedskills)
        }
    })
})

function outputskills(perent, skills) {
    let result = ''
    skills.forEach((skill, index) => {
        result += `(${index + 1})${skill}  `
    })
    perent.innerHTML = result
}


// 213 List and Input Event Handler in Javascript 
let list = document.getElementById('list')
list.addEventListener('dblclick', function (event) {
    if (this.contains(event.target)) {
        let innerText = event.target.innerText
        event.target.innerHTML = ''
        let inputbox = creatInputBox(innerText)
        event.target.appendChild(inputbox)
        inputbox.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                event.target.innerHTML = e.target.value
            }
        })
    }
})


function creatInputBox(value) {
    let inp = document.createElement('input')
    inp.type = 'text'
    inp.className = 'form-control'
    inp.value = value
    return inp
}












