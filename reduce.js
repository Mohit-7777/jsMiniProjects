const prices = [2,4,6,8,12,41,56,74,43,23];
const sum1 = prices.reduce(sum);
console.log(sum1);


function sum(acc, element){
    return acc + element;
}

const grade = [61,83,44,67,90,86];
const maxi = grade.reduce(getMax);
const mini = grade.reduce(getMin);
console.log(maxi);
console.log(mini);


function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}