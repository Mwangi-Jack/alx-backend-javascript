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
	const style = document.createElement('style');
	style.textContent = `
		body: {
			display: flex;
			align-items: center;

			border: red;
		}
		table {
			width: 50%;
			margin: auto;
			border-collapse: collapse;
		}
		th, td {
			border: 1px solid black;
			padding: 10px;
			text-align: left;
		}
		th {
			background-color: #f2f2f2;
		}
	`;
	document.head.appendChild(style);

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

