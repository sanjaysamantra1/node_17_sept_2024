let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

// find the employee whose salary is 8000
let emp_sal_8000 = employees.find((emp) => emp.sal == 8000);
console.log(emp_sal_8000);

// at what index the employee is present whose sal is 8000
let ind_sal_8000 = employees.findIndex((emp) => emp.sal == 8000)
console.log(ind_sal_8000)

// find the last employee whose salary is 8000
let last_emp_sal_8000 = employees.findLast((emp) => emp.sal == 8000);
console.log(last_emp_sal_8000);

// at what index the last employee is present whose sal is 8000
let last_ind_sal_8000 = employees.findLastIndex((emp) => emp.sal == 8000)
console.log(last_ind_sal_8000)

// find all the male employees
let male_emps = employees.filter((emp) => emp.gender == 'male');
console.log(male_emps)
