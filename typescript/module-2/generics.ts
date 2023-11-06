{
  type GenericArray<T> = Array<T>;

  // const friends : Array<string> = ['rakib','akib'];
  const friends: GenericArray<string> = ["sakil", "atik", "osman", "alamin"];

  //   const rolls : Array<number> = [3,5,6,8]
  const rolls: GenericArray<Number> = [3, 53, 2, 31];

  type GenericTuple<X, Y> = [X, Y];
  type User = {
    name: string;
    age: number;
  };
  const userWithId: GenericTuple<number, User> = [
    234,
    { name: "Karim", age: 24 },
  ];

  const students: GenericTuple<string, string> = ["nakib", "rokib"];
  const numbers: GenericTuple<number, number> = [34, 73];
  const nullAndUndefined: GenericTuple<null, undefined> = [null, undefined];
}
