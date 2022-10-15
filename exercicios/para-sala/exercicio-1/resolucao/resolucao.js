const employee1 = {
  id: 1,
  firstName: "Phoebe",
  lastName: "Buffay",
  salary: 3_200,
  raiseSalary(percent) {
    const newSalary = this.salary + this.salary * (percent / 100);
    this.salary = newSalary;
    return this.salary;
  },
};

console.log(
  `Employee ${employee1.id}: ${employee1.firstName} ${employee1.lastName}`
);
console.log(`Salary: ${employee1.salary}`);
console.log(`New Salary: ${employee1.raiseSalary(10)}`);
console.log("===========================");

const employee2 = {};
employee2.id = 2;
employee2.firstName = "Chandler";
employee2.lastName = "Bing";
employee2.salary = 1_000;
employee2.raiseSalary = function raiseSalary(percent) {
  const newSalary = this.salary + this.salary * (percent / 100);
  this.salary = newSalary;
  return this.salary;
};

console.log(
  `Employee ${employee2.id}: ${employee2.firstName} ${employee2.lastName}`
);
console.log(`Salary: ${employee2.salary}`);
console.log(`New Salary: ${employee2.raiseSalary(10)}`);
