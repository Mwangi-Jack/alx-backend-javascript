interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

type StudentArray = Array<Student>

const student1: Student = {
	firstName: 'Jackson',
	lastName: 'Mwangi',
	age: 24,
	location: 'Nairobi'
}

const student2: Student = {
	firstName: 'Alice',
	lastName: 'Wambui',
	age: 21,
	location: 'Muranga'
}


const studentArray = [student1, student2];

function renderTable(studentArray: StudentArray) {
	const table = document.createElement('table')
	const headerRow = document.createElement('tr');
	const headerFirstName = document.createElement('th')
	headerFirstName.textContent = 'First Name';
	const headerLocation = document.createElement('th');
	headerLocation.textContent = 'Location';

	headerRow.appendChild(headerFirstName);
	headerRow.appendChild(headerLocation);
	table.appendChild(headerRow);

	studentArray.forEach(student => {
		const row = document.createElement('tr');
		const cellFirstName = document.createElement('td');
		cellFirstName.textContent = student.firstName;
		row.appendChild(cellFirstName);

		const cellLocation = document.createElement('td');
		cellLocation.textContent = student.location;
		row.appendChild(cellLocation);

		table.appendChild(row);
	});

	document.body.appendChild(table);
}

renderTable(studentArray)

