// function type
// normal function
function add(a: number, b: number): number {
  return a + b;
}

// arrow function
const multiple = (a: number, b: number): number => {
  return a * b;
};

// callback function
const array: number[] = [35, 23, 51];
const newArray: number[] = array.map((ele: number): number => ele * ele);
