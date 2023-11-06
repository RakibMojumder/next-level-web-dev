{
  // array map
  const numbers: Array<number> = [2, 8, 3, 5];
  const strings: Array<string> = numbers.map((number) => number.toString());

  // type map
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    // [index in 'height' | 'width'] : string
    // [key in 'height' | 'width'] : string

    // [index in keyof AreaNumber]: string
    [key in keyof AreaNumber]: string; // ✔✔✔✔
  };

  type AreaBoolean = {
    [key in keyof AreaNumber]: boolean;
  };

  // Generics types
  type Person = {
    name: string;
    age: number;
  };

  type Student = {
    id: number;
    name: string;
    email: string;
    roll: number;
  };

  type GenericsType<T> = {
    [key in keyof T]: T[key];
  };

  const person: GenericsType<Person> = {
    name: "akib",
    age: 23,
  };

  const student: GenericsType<Student> = {
    id: 3,
    name: "rakib",
    email: "ab@gmail.com",
    roll: 1,
  };
}
