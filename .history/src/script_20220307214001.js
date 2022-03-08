// var color = 'red';
// var name ='foo';
// function first() {
//     var color ='green';
//     console.log(color);
    

//     function second() {
//         console.log(name);
//   }
//   second();
// }
// first();

// const  greeting = function (){
//     console.log('greeting hiiiii');
// }
// greeting();

const getName = function(gender){
    // eslint-disable-next-line linebreak-style
    return gender === 'male'?'john' : 'emilie'
}

const sayHiWithName = function(name){
    console.log('hi'  ,${name})
}
sayHiWithName('female');