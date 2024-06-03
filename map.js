let num = [1,2,3,4,5,6];
let sq = num.map(square);
console.log(sq);

function square(element){
    return Math.pow(element, 2)
}

let dates = ["2020-1-10", "2030-2-20", "2040-3-30"];

const display = dates.map(formatdates);
console.log(display);

function formatdates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}