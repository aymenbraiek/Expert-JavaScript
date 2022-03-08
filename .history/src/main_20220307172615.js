const obj = {};
const obj1 = {
  firstName: 'aymen',
  lastName: 'braiek',
};

obj1.age = 33;
console.log('obj1', obj1);
alert('hello world');
console.log('windows', window);
console.log('this', this);
console.log(window === this);

function second() {
  console.log('second function');
}

function first() {
  console.log('fisrt method');
}
first();
second();
var color = 'red';
 function firstColor() {
   var color = 'green';
   console.log(color);
   }

   firstColor();
   console.log('color is', color);