export class MyException extends Error {}

export const callMe = (name: string) => {
  if (name === "Eko") {
    throw new MyException("Ups my exceptions happens");
  } else {
    return "OK";
  }
};
