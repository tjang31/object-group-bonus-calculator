const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

console.log(employees);

class Employee {
  constructor (emp){
    this.name = emp.name;
    this.employeeNumber = emp.employeeNumber;
    this.annualSalary = emp.annualSalary;
    this.reviewRating = emp.reviewRating;
    this.bonusPercentage = bonus(emp) + '%';
    this.totalCompensation = calculate(emp);
    this.totalBonus = bonusTotal(emp);
  }
}
function swag(name){
  let supaSwag = new Employee(name);
  return supaSwag;
}

function bonus(person){
  let reward = 0;
  if (person.employeeNumber.length == 4) {
    reward += 5;
  }
  if (parseInt(person.annualSalary) > 65000 ){
    reward -= 1;
  }
  if (person.reviewRating == 3){
    reward += 4;
  }
  else if (person.reviewRating == 4) {
    reward += 6;
  }
  else if (person.reviewRating == 5) {
    reward += 10;
  }
  if (reward > 13){
    reward = 13;
  }
  if (reward < 0){
    reward = 0;
  }
  return reward;
}

function calculate (dollar){
  bank = parseInt(dollar.annualSalary) * (1 + (bonus(dollar))/100);
  let coin = bank.toFixed(2);
  let newCoin = parseInt(coin);
  return newCoin;
}
function bonusTotal (bling){
  let money = bonus(bling);
  let bills = (money/100) * bling.annualSalary;
  let newBill = parseInt(bills);
  return newBill;
}

for (people of employees){
  console.log(swag(people));
}
