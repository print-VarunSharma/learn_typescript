/* Decorators
https://www.typescriptlang.org/docs/handbook/decorators.html

What is a decorator?
It's a function that allows you to hook into your source code
to either extend the functionality of it or annotate it with metadata
So why would you want to annotate your code with metadata? More than likely your probably don't
There might be some good use cases, but the building something like the angular compiler is a good use case
 You can analyze the metadata to do things like dependency injection
Decorators can ulimtately hook into your code and alter the behaviour of it

*/

// experimentalDecorators = true in your ts config file
// @cool()
// export class MyComponent {
// 	@Rad(0) thing;
// 	@Awesome
// 	method(@Neat foo, @Neat bar) {}
// }

// Be careful to not overdue decorators, you want to use them on code that's stable and used frequently throughout the application

/* 
5 Things you can decorate: 
- Class Definitions
- Properties
- Methods
- accessors
- parameters
*/

/* Property  Decorators */
/* 
Any property decorator receives the following parameters:

For static properties, the constructor function of the class. 
For all the other properties, the prototype of the class.
The name of the member.
*/
const printMemberName = (target: any, memberName: string) => {
	console.log(`First Name is: ${memberName}`);
};

class Person {
	@printMemberName
	name: string = 'Varun';
}

const person1 = new Person();

person1.name;

/* 
Class Decorator
*/

const classDecorator = (target: Function) => {
	// do soemthing with your class
};

@classDecorator
class Rocket {}

const addFuelToRocket = (target: Function) => {
	return class extends target {
		fuel = 100;
	};
};

@addFuelToRocket
class Rocket {}
