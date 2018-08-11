export function hello(){
     return alert(' ¯\\_(ツ)_/¯ ');
}

export const user = {  
  firstName: 'Buddy',
  lastName: 'Vaseashta',
  level: 'React 101'
};

/* Next-Gen JavaScript Features */

/********* Lesson ************/
/*let & const & ES6 Arrow Functions */
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
/********* Classes! ************/
/*Classes are a feature which basically replace constructor functions and prototypes. You can define blueprints for JavaScript objects with them. */
/********* Lesson ************/
class PersonLesson {
    constructor () {
        this.name = 'MaxPersonLesson';
    }
}
 
const personLesson = new PersonLesson();
console.log(personLesson.name); // prints 'MaxPersonLesson'
/*In the above example, not only the class but also a property of that class (=> name ) is defined.
The syntax you see there, is the "old" syntax for defining properties. 
In modern JavaScript projects you can use the following, more convenient way of defining class properties:*/
class PersonLesson1 {
    name = 'MaxPersonLesson1';
}
 
const personLesson1 = new PersonLesson1();
console.log(personLesson1.name); // prints 'MaxPersonLesson1'
/* You can also define methods. Either like this:*/
class PersonLesson2 {
    name = 'MaxPersonLesson2';
    printMyName () {
        console.log(this.name); // this is required to refer to the class!
    }
}
 
const personLesson2 = new PersonLesson2();
personLesson2.printMyName();
/*Or like this:*/
class PersonLesson3 {
    name = 'MaxPersonLesson3';
    printMyName = () => {
        console.log(this.name);
    }
}
 
const personLesson3 = new PersonLesson3();
personLesson3.printMyName();
/*The second approach has the same advantage as all arrow functions have: The this  keyword doesn't change its reference.
You can also use inheritance when using classes:*/
class Human {
    species = 'human';
}
 
class PersonLesson4 extends Human {
    name = 'MaxPersonLesson4';
    printMyName = () => {
        console.log(this.name);
    }
}

const personLesson4 = new PersonLesson4();
personLesson4.printMyName();
console.log(personLesson4.species); // prints 'human'
/*Classes  **/

/********* Lesson ************/
/*Spread Operator */
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
/*Spread Operator*/

/********* Lesson ************/
/*Rest Operator*/
/********* Lesson ************/
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3));
/*Rest Operator*/
/*Spread & Rest Operator
The spread and rest operators actually use the same syntax: ... 
Yes, that is the operator - just three dots. It's usage determines whether you're using it as the spread or rest operator.
Using the Spread Operator:
The spread operator allows you to pull elements out of an array (=> split the array into a list of its elements) or pull the properties out of an object. Here are two examples:*/
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5]; // This now is [1, 2, 3, 4, 5];
/*Here's the spread operator used on an object:*/
console.log(newArray);

const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};
console.log(oldObject);
console.log(newObject);
/*The spread operator is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. */


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
secondPerson1.name = 'Manu1';
console.log(secondPerson1);


/********* Lesson ************/
/*Arrays*/
/********* Lesson ************/
const numbArray = [1,2,3];
const doubleNumArray = numbArray.map((num) =>{
  return num*2;
} );
console.log(numbArray);
console.log(doubleNumArray);

/********* Lesson ************/
/*Destructuring*/
/********* Lesson ************/
/*Destructuring allows you to easily access the values of arrays or objects and assign them to variables.
Here's an example for an array:*/
const array1 = [1, 2, 3];
const [a, b] = array1;
console.log(a); // prints 1
console.log(b); // prints 2
console.log(array1); // prints [1, 2, 3]
/*And here for an object:*/
const myObj = {
    name1: 'Max',
    age1: 28
}
const {name1} = myObj;
console.log(name1); // prints 'Max'
console.log(myObj.age1); // prints 28
console.log(myObj); // prints {name: 'Max', age: 28}
/*Destructuring is very useful when working with function arguments. Consider this example:*/

const printName1 = (personObj) => {
    console.log(personObj.name1);
}
printName1({name1: 'MaxLastLesson', age1: 28}); // prints 'Max'
/*Here, we only want to print the name in the function but we pass a complete person object to the function. Of course this is no issue but it forces us to call personObj.name inside of our function. We can condense this code with destructuring:*/

const printName = ({name1}) => {
    console.log(name1);
}
printName({name1: 'MaxLastLesson', age1: 28}); // prints 'Max')
/*We get the same result as above but we save some code. By destructuring, we simply pull out the name  property and store it in a variable/ argument named name  which we then can use in the function body.*/

/*
Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.

You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
