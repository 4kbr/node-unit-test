export const sayHello = (name?: string | null) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    throw new Error("Name is required");
  }
};
