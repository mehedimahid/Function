//189 Implement Fetch API in Javascript

const BASE_URl = 'http://jsonplaceholder.typicode.com'

// fetch(`${BASE_URl}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         return Promise.resolve('Something')
//     })
//     .then(str => {
//         console.log(str)
//         return Promise.resolve('Another Promise')
//     })
//     .then(another => {
//         console.log(another)
//     })
//     .catch(e => {
//         console.log(e.message)
//     })


// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)
//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }

//     xhr.send()
// }




function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response)
                    resolve(response)
                } else {
                    reject(new Error('Error Occurred'))
                }
            }
        }

        xhr.send()
    })
}


getRequest(`${BASE_URl}/users/1`)
    .then(data =>{
        console.log(data)
    })
    .catch(e =>{
        console.log(e.message)
    })




