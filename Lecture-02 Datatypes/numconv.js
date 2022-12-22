let num1 = '150';
let flo1 = '1.50';

console.log("***********Converting strings to integer************");
// Converting strings to integers
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')); // Hexadecimal number

console.log("***********Convering strings to Float********");
// Converting strings to float
console.log(parseFloat('1.25abc'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));

console.log("***********More Convering Examples********")
    // More Conversion Examples
    // Numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

// Using Template Literals
console.log("***********Convering number to string********")
    // Convering number to string
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());