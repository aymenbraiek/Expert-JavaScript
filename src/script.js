// // // // var color = 'red';
// // // // var name ='foo';
// // // // function first() {
// // // //     var color ='green';
// // // //     console.log(color);
    

// // // //     function second() {
// // // //         console.log(name);
// // // //   }
// // // //   second();
// // // // }
// // // // first();

// // // // const  greeting = function (){
// // // //     console.log('greeting hiiiii');
// // // // }
// // // // greeting();

// // // const getName = function(gender){
// // //     return gender === 'male'?'john' : 'emilie'
// // // }

// // // const sayHiWithName = function(name) {
// // //     console.log(name('male'));
// // // }
// // // sayHiWithName(getName);



// // // const makeFunc = function() {
// // //     return function(){
// // //         console.log('holaaaaaaaa!!!!!')
// // //     }
// // // }

// // // makeFunc()();
// // // c 


// // (function startGame() {
// //     //init()
// //     console.log('start !!!!!!!!!!!!!!!!!!')
// // })();

// var result =(function startGame(){
//     console.log('start game!!!!!!!!!!');
//     return Math.floor(Math.random() *3);
// })();

var game = (function startGame(){
console.log('started!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

//score 
var score=0;
//score
function incrementStore(){
score ++;
}
function getScore(){
    return score;
}
var playerId = Math.floor(Math.random()*100);
return {
    incrementStore: incrementStore,
    getScore: getScore,
    playerId: playerId
}

})();