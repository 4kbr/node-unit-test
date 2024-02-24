export const sayHelloAsync = (name?: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello ${name}`);
      } else {
        reject("Name is empty");
      }
    }, 1000);
  });
};

const amba = async () => {};

export const getBalance = async (name: string, from: () => Promise<any>) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
