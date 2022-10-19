const sharedMethods = {
  raiseSalary(percent) {
    const newSalary = this.salary + this.salary * (percent / 100);
    this.salary = newSalary;
    return this.salary;
  },
  addBenefits(benefit) {
    this.benefits.push(benefit);
  },
  removeBenefits(benefit) {
    const index = this.benefits.indexOf(benefit);
    this.benefits.splice(index, 1);
  },
  listBenefits() {
    return this.benefits;
  },
};

function Employee(firstName, lastName, salary) {
  const employee = {
    id: (Math.random() * 100).toFixed(),
    firstName: firstName,
    lastName: lastName,
    salary: salary,
    benefits: [],
    raiseSalary: sharedMethods.raiseSalary,
    addBenefits: sharedMethods.addBenefits,
    removeBenefits: sharedMethods.removeBenefits,
    listBenefits: sharedMethods.listBenefits,
  };

  return employee;
}

const employee1 = Employee("Joey", "Tribiani", "900");
console.log(employee1.listBenefits());

console.log("adicionando benefícios...");
employee1.addBenefits("VR");
employee1.addBenefits("VA");
employee1.addBenefits("Gympass");
console.log(employee1.listBenefits()); //[ 'VR', 'VA', 'Gympass' ]

console.log("removendo benefício VA...");
employee1.removeBenefits("VA");
console.log(employee1.listBenefits()); //[ 'VR', 'Gympass' ]
