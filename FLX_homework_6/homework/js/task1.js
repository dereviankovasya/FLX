function solveQuadraticEquation() {

const a = parseFloat(prompt('write a: ', '0')),
    b = parseFloat(prompt('write b: ', '0')),
    c = parseFloat(prompt('write c: ', '0'));
let result;

const equationSolution = function(a, b, c) {

    if ((isNaN(a) || isNaN(b) || isNaN(c)) || a === 0) {
        result = 'Invalid input data';
    } else {
        const discriminantEquation = (b * b) - (4 * a * c);
        if (discriminantEquation === 0) {
            result = 'x = ' + (-b / (2 * a)).toFixed(2);
        } else if (discriminantEquation > 0) {
            const x1 = (-1 * b + Math.sqrt(discriminantEquation)) / (2 * a);
            const x2 = (-1 * b - Math.sqrt(discriminantEquation)) / (2 * a);
            result = 'x1 = ' + x1.toFixed(2) + ' , x2 = ' + x2.toFixed(2);
        } else {
            result = 'no solution';
        }
    }
    return result;
}
return equationSolution(a, b, c);
}
alert(solveQuadraticEquation());


//використав alert, console.log видає error (ESlint)