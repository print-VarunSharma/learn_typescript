/* Tuples */
// Use Vector type
const number: number[] = [0, 0, 0, 0, 0];

type Vector2D = [number, number];
// this can be done when you know the amount of items in a given array
// Can be useful when dealing with say X,Y coordinate plains
const vector1: Vector2D = [0, 0];

const vector2: Vector2D = [0, 0, 0];
// Errors out as we have set the boundary of X,Y coordinates

/* Unknown */
// Using Unknown
// By using any, you're defeating the purpose of Typescript

const v: any = 'string';

const v2: unknown = 0;

v2 + 3;
// if we try to add a value to it, it throws an error because it does not know what v2 is

if (typeof v2 === 'number') v2 + 2;
// use unknowns before using 'any'.
// Unknowns offer some protection rather than the chaos of any

/* Never */
// When to use never
// tells TS that a value will never be returned
// Custom Error Handling func, this will always throw an error
// can be more explicit and safer than returning null
function throwsErrors(statusCode: number): never {
	if (statusCode === 0) {
		throw Error('Status code zero');
	}
	throw Error('Unkown Status Code');
}
// why use never over void? ====>
/* 
https://stackoverflow.com/questions/37910669/what-is-the-difference-between-never-and-void-in-typescript
TL;DR: void returns void, never never returns.

*/
/* Decorators */
// What is a decorator?
// It's a function that allows you to hook into your source code
// to either extend the functionality of it or annotate it with metadata
// So why would you want to annotate your code with metadata? More than likely your probably don't
// There might be some good use cases, but the building something like the angular compiler is a good use case
//  You can analyze the metadata to do things like dependency injection
// Decorators can ulimtately hook into your code and alter the behaviour of it

// experimentalDecorators = true in your ts config file
@cool()
export class MyComponent {
	@Rad(0) thing;
	@Awesome
	method(@Neat foo, @Neat bar) {}
}

// Becareful to not overdue decorators, you want to use them on code that's stable and used frequently throughout the application

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
	console.log(memberName);
};

class Person {
	@printMemberName
	name: string = 'Varun';
}

const person1 = new Person();

person1.name;
