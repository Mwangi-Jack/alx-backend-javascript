// one
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// two
interface Directors extends Teacher {
	numberOfReports: number;
}

// three
function printTeacher(firstName: string, lastName: string) {
	return `${firstName[0]}. ${lastName}`
}

// four

interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string
}

interface StudentClassContructor {
	new (firstName: string, lastName: string): StudentClassInterface
}


class StudentClass implements StudentClassInterface {
	public firstName: string;
	public lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName
	}
	workOnHomework(): string {
		return "Currently working"
	}

	displayName(): string {
		return this.firstName;
	}
}
