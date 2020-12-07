// function something(greet, name){
//     function sayHi() {
//         console.log(greet, name)
//     }
//     sayHi()          //vitorei call kora lagbe
// }

// something('Good Morning', 'MH Mahid')

        //inner function == function ar modde ar akta function



function something(greet, name){
    function getFirstName() {
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }
    }
    var massege = greet + ' ' + getFirstName()
    console.log(massege)
}

something('Good Morning', 'Mehedi Hasan Mahid')
