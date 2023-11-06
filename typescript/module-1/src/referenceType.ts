// Object type, literal type, optional type
const person: {
  firstName: string;
  lastName: string;
  age: number;
  country: "Bangladesh"; // literal type
  isMarried?: boolean; // optional type
} = {
  firstName: "Rakib",
  lastName: "Ahmed",
  age: 23,
  country: "Bangladesh",
};

// read only property
const product: {
  readonly name: "Watch";
  price: number;
} = {
  name: "Watch",
  price: 2200,
};

// product.name = "Mobile"; // Cannot change product name because it is a read only property
