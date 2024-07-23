export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const Student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 23,
  location: 'New York'
}
const Student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'New York'
}

const studentsList: Array<Student> = [ Student1, Student2 ];

const stylesheet = `
  table {
    border-collapse: collapse;
    width: 100%;
    }
  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    }
  th {
    background-color: #f2f2f2;
    }
  tr:nth-child(even) {
    background-color: #f2f2f2;
    }
  tr:hover {
    background-color: #f5f5f5;
  }`

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
  tableHead.insertAdjacentElement('beforeend', headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = stylesheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
