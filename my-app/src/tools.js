export function hello(){
     return alert(' ¯\\_(ツ)_/¯ ');
}

export const user = {  
  firstName: 'Buddy',
  lastName: 'Vaseashta',
  level: 'React 101'
};

/********* Lesson ************/
/*ES6 refresher*/
/********* Lesson ************/
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


/********* Lesson ************/
/*Spread operator (...) */
/********* Lesson ************/
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

/********* Lesson ************/
/*Rest operator*/
/********* Lesson ************/
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
/*Rest operator*/

/********* Lesson ************/
/*Destructuring Object and Array*/
/********* Lesson ************/
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

/********* Lesson ************/
/*Reference vs Primitive Type*/
/********* Lesson ************/
/*Primitive Type*/
const number = 1;

/*Reference Type*/
const num2 = number;
console.log(num2);


/*person the object is stored in memory and const person is a pointer to it*/
const person0 = {
  name: 'Ankur'
};
/*copy of pointer not object (could be an issue)*/
const secondPerson = person0;
person0.name = 'Manu';
console.log(secondPerson);



/*person the object is stored in memory and const person is a pointer to it*/
const person1 = {
  name: 'Ankur1'
};
/* use spread to copy the object and not the pointer to the object)*/
const secondPerson1 = {
  ...person1
};
person.name = 'Manu1';
console.log(secondPerson1);
