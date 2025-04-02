const sumSalaries = (obj) => {
  const values = Object.values(obj);

  return values.reduce((accum, currentNum) => {
    return accum + currentNum;
  });
};

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = sumSalaries(salaries);

console.log(sum);
