// one
interface DirectorInterface {
	workFromHome(): string;
	getCoffeBreak(): string;
	workDirectorTasks(): string
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}


class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}

	getCoffeBreak(): string {
		return 'Getting a coffee break'
	}

	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}

	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
	if (typeof salary === 'number' && salary < 5000) {
		return new Teacher;
	}

	return new Director;
}


// Two

function isDirector(employee: any ): employee is Director {
	return employee
}


function executeWork(employee: DirectorInterface | TeacherInterface ) {
	if (employee instanceof Director) {
		employee.workDirectorTasks()
	}

	if (employee instanceof Teacher) {
		employee.workTeacherTasks()
	}
}

// Three

type Subjects =  'Math' | 'History';

function teachClass(todsyClass: Subjects): string {
	return `Teaching ${todsyClass}`;
}
