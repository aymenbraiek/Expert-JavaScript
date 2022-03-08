var color = 'red';
let  name ='foo';
function first() {
    var color ='green';
    console.log(color);
    

    function second() {
        console.log(name);
  }
  second();
}
first();