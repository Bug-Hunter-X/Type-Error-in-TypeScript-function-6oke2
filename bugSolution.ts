function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct
console.log(result); // 8

result = subtract(10, 5); // Correct
console.log(result); // 5

result = add(parseInt("5"), 3); // Correct solution
console.log(result); // 8

result = add(Number("5"),3); //Correct solution
console.log(result); //8