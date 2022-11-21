const a = '1';
console.log('aaa', a);

let hello: string = 'world';

const getFullName = (name: string, surname: string) => {
	return name + ' ' + surname;
};

console.log(getFullName('Varun', 'sharma'));

interface User {
	name: string;
	// optional
	age?: number;
}

const user = {
	name: 'varun',
	age: 3
};
const user2 = {
	name: 'varun'
};

type ID = string;

let pageName: string | number = '1';

let someProp: string | number | null;

const doSomething = (): void => {
	// doesnt return anything
	console.log('dosomething');
	// void is undefined and null
};

//type casting function
let y: string = 'a';

//y as int

interface UserInterface<T, V> {
	getFullName(): string;
	name: string;
	data: T;
	meta: V;
}

class User {
	private firstName: string;
	public lastName: string;
	// no checkins on run time for private, public, protected
	readonly unchangableName: string;
	// can't change unchangableName
	static readonly maxAge = 50;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.unchangableName = firstName;
	}

	changeUnchangableName(): void {}
	getFullName(): string {
		return this.firstName + this.lastName;
	}
}

const user4 = new User('Varun', 'smith');
console.log(user4);
console.log(user4.getFullName());
console.log(User.maxAge);

class Admin extends User {
	constructor() {
		this.editor = editor;
	}
	private editor: string;

	setEditor(editor: string): void {
		this.editor = editor;
	}

	getEditor(): string {
		return this.editor;
	}
}

const admin = new Admin('varun', 'sharma');
console.log(admin);

const addId = <T>(obj: T) => {
	const id = Math.random().toString(16);
	return {
		...obj,
		id
	};
};

const result = addId<string>('foo');
console.log('result', result);

const user6: UserInterface<{ meta: string }, string> = {
	name: 'jack',
	data: {
		meta: 'food'
	},
	meta: 'string'
};

const user7: UserInterface<string[]> = {
	name: 'jack',
	data: {
		meta: ['food', 'bar', 'bus']
	}
};

const statuses = {
	notStarted: 0,
	inProgress: 1,
	done: 2
};

enum StatusEnum {
	NotStarted = 'notstarted',
	InPrgress = 'inpgoress',
	Done = 'done'
}

let notStartedStatus: Status = Status.NotStarted;

notStartedStatus = Status.Done;

console.log(notStartedStatus);

interface Task {
	id: string;
	status: StatusEnum;
}
