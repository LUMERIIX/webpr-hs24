
//q10A
//const e = {revenue: 10000, bonus: null};
//
//const bonusFormula = 'employee.bonus = employee.revenue * 0.2';
////const bonusCalculation = employee => eval(bonusFormula);
//const bonusCalculation = Function('employee', bonusFormula);
//
//bonusCalculation(e);
//console.log(e.bonus === e.revenue * 0.2);

//q10b
const e = {revenue: 10000, bonus: null};
const bonusFormula = ' employee.revenue * 0.2';
const bonusCalculation = Function('employee', 'return ' + 'employee.bonus = ' + bonusFormula);
bonusCalculation(e);
console.log(e.bonus === e.revenue * 0.2);

