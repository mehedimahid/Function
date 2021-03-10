

                        //178 Asynchronous Programming is Action in Javascript |
// console.log('I am line one')

// setTimeout(() => {
//     console.log('I am line two')
// }, 3000)

// setTimeout(() => {
//     console.log('i am line three')
// },0)

// console.log('i am line four')

// setTimeout(() => {
//     console.log('i am line five')
// },1000)


// setTimeout(() =>{
//     console.log('i have done')
// },3000)



                        // 179 How to Store result from Async Function in Javascript

// function sayMyName(name){
//     let result
//     setTimeout(() =>{
//         result = name
//         console.log('i have done.....')
//     },3000)
//     return result
// }
// let outPut = sayMyName('MH Mahid')
// console.log(outPut)


// function sayMyName(name) {
//     setTimeout(() => {
//         console.log(name)
//     },3000)
// }


// let outPut = sayMyName('MH Mahid')
// console.log(outPut)



                                //185 Ajax with Callback in Javascript 

// http://jsonplaceholder.typicode.com/

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'http://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function(e) {
//     if (xhr.readyState === 4){
//         if(xhr.status === 200){      //Details => https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
//             let user = JSON.parse(xhr.response)
//             console.log(user)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()


function getRequest(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4){
            if(xhr.status === 200){      
                let response = JSON.parse(xhr.response)
                callback(null, response)
            }else{
                callback(xhr.status, null)
            }
        }
    }
    
    xhr.send()
}


getRequest('http://jsonplaceholder.typicode.com/users', (err, res) =>{
    if(err){
        console.log(err)
    }else{
        // console.log(res)
        res.forEach(r => console.log(r.name))
    }
})


getRequest('http://jsonplaceholder.typicode.com/posts', (err, res) =>{
    if(err){
        console.log(err)
    }else{
        // console.log(res)
        res.forEach(r => console.log(r.title))      //r = singular post obj portek p. obj. ar vitor title ase
            
        
    }
})







