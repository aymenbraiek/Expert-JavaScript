var color = 'red';
var name ='foo';
function first() {
    var color ='green';
    console.log(color);
    

    function second() {
        console.log(name);
  }
  second();
}
first();

const  greeting = function (){
    console.log('greeting');
}
greeting();