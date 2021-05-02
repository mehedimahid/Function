

// 216 AJAX GET Request in Javascript

// let load =document.getElementById('load')
// let postList = document.getElementById('post')

// const URl = 'http://jsonplaceholder.typicode.com/posts'



// load.addEventListener('click', function(){
//   fetch(URl)
//     .then(response => response.json())
//     .then(posts =>{
//       posts.forEach((post, index)=> {
//        let listItem = listItemGenerator(post, index + 1)
//        postList.appendChild(listItem)
//       })      
//     })
//     .catch(e => console.log(e.message))
// })


// function listItemGenerator(item, number) {
//   let li = document.createElement('li')
//   li.className = 'list-group-item'
//   li.innerHTML = `${number}.${item.title}`

//   return li
// }


// 217  Ajax Post Request in Javascript _ Stack Learner


let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')
const URl = 'http://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URl, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenerator(post)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))

    } else {
        alert('Please Provide Every Details')
    }
})



function listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}.${item.title} by User ID - ${item.userId}`

    return li
}

