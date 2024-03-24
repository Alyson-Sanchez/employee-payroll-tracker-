// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

class employee {
    constructor(firstName,lastName,salary){
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
    }
}

// Collect employee data
const collectEmployees = function() {

  var isAddingEmployee = true;
  var employees = Array();
  while (isAddingEmployee){
    currentEmployee = new employee('','',0);
    let employeeFirstName = prompt("First Name:", "John");
      if (employeeFirstName == null || employeeFirstName == ""){
        text = "User Cancelled.";
        isAddingEmployee = false;
        continue;
      }
      currentEmployee.firstName = employeeFirstName;
  
    isAddingEmployee = true;

    let employeeLastName = prompt("Last Name:", "Smith");
      if (employeeLastName == null || employeeLastName == ""){
        text = "User Cancelled.";
        isAddingEmployee = false;
        continue;
      }
      currentEmployee.lastName = employeeLastName;

    let employeeSalary = prompt ("Salary:","0");
      
      if (employeeSalary == null || employeeSalary == ""){
        text = "User Cancelled.";
        isAddingEmployee = false;
        continue;
      }
      currentEmployee.salary = parseInt(employeeSalary, 10);
      

      if (confirm("Add another employee?")){
        employees.push(currentEmployee);
        isAddingEmployee = true;
      } else 
        {employees.push(currentEmployee);
        isAddingEmployee = false;} 
  }

return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  var salarySum = 0;
  for(let i = 0; i < employeesArray.length; i++) {
    var currentEmployee = employeesArray[i];
    salarySum = salarySum + currentEmployee.salary ;
  }
  var averageSalary = salarySum / employeesArray.length;

  console.log("This is the average salary: $" + averageSalary.toString())
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  console.log (employeesArray.length);

  if (employeesArray.length == 0){
    console.log('There are no employees.');
    return;
  }
  var randomEmployeeIndex =  Math.floor(Math.random() * (employeesArray.length -1));
  var randomEmployee = employeesArray[randomEmployeeIndex];
  var randomEmployeeFullName = randomEmployee.firstName + ' ' + randomEmployee.lastName;
  console.log(`Congratulations to ${randomEmployeeFullName}, our random drawing winner!`); 
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {

  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
