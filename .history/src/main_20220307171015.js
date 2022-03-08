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
  second();
}
first() ;