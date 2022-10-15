function Employee(firstName, lastName, salary) {
  const employee = {
    id: (Math.random() * 100).toFixed(),
    firstName: firstName,
    lastName: lastName,
    salary: salary,
    raiseSalary(percent) {
      const newSalary = this.salary + this.salary * (percent / 100);
      this.salary = newSalary;
      return this.salary;
    },
  };

  return employee;
}

const employee1 = Employee("Monica", "Geller", 2_500);
console.log(`Employee ID: ${employee1.id}`);
console.log(
  `${employee1.firstName} ${employee1.lastName} - Salary: $${employee1.salary}`
);

const employee2 = Employee("Rachel", "Green", 1_200);
console.log(`Employee ID: ${employee2.id}`);
console.log(
  `${employee2.firstName} ${employee2.lastName} - Salary: $${employee2.salary}`
);
