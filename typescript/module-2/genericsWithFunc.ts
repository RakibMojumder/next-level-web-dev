{
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result = createArrayWithGeneric<string>("Bangladesh");
  const result1 = createArrayWithGeneric<boolean>(false);
  const result2 = createArrayWithGeneric<number>(4);
}
