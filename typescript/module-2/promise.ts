{
  const createPromise = (
    value: string | boolean
  ): Promise<string | boolean> => {
    return new Promise<string | boolean>((resolve, reject) => {
      if (value) {
        resolve(value);
      }
      reject("value does not found");
    });
  };

  const getData = async () => {
    const data = await createPromise(true);
    console.log(data);
  };

  getData();
}
