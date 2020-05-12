let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
}; // 6700

function getSalarySum(company) {
  return Object.values(company).reduce((acc, value) => {
    if (Array.isArray(value) || !value.salary) {
      acc += getSalarySum(value);

    } else if (value.salary) {
      acc += value.salary;
    }

    return acc;
  }, 0);
}

console.log(getSalarySum(company));
