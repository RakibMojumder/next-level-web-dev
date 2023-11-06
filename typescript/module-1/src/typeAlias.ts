{
  // object type alias
  type Student = {
    name: string;
    age: number;
    isMarried: boolean;
    roll: number;
    contactNo?: string;
  };

  const student1: Student = {
    name: "Rakib Ahmed",
    age: 23,
    isMarried: false,
    roll: 2,
  };

  const student2: Student = {
    name: "Sakib Ahmed",
    age: 32,
    isMarried: true,
    roll: 42,
    contactNo: "8328232222",
  };

  // string type alias
  type StudentName = string;
  const studentName: StudentName = "Rakib Ahmed";

  // boolean type alias
  type IsMarried = boolean;
  const isMarried: IsMarried = false;

  // function type alias
  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;
}
