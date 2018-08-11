export function hello(){
     return alert(' ¯\\_(ツ)_/¯ ');
}

export const user = {  
  firstName: 'Buddy',
  lastName: 'Vaseashta',
  level: 'React 101'
};

/*ES6 refresher*/
let myName = 'Ankur';
console.log("Welcome " + myName);

myName = 'AnkurTest';
console.log(myName);

const printMyName = (name, age) => {
  console.log(name, age);
}
printMyName('Max', 33);

const multiply = number => number * 2;
console.log(multiply(2));
/*ES6*/

/*Spread operator (...) */
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
  name: 'Ankur'
}

const newPerson = {
  ...person,
  age: 33
}

console.log(newPerson);
/*Spread operator*/

/*Rest operator*/
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
/*Rest operator*/

/*Destructuring Object and Array*/
/*Arrray Destructuring*/
let array = ['Hello','Max'];
console.log(array[1]);
console.log(array[2]);

const numberss = [1, 2, 3];
let [num1, ,num3] = numberss;
console.log(num1, num3);
/*Arrray Destructuring*/

/*Object Destructuring*/
let {name,age} = {name: 'Ankur', age: 33};
console.log(name);
console.log(age);
/*Arrray Destructuring*/