export interface Avocado {
  discriminator: "I-AM-A";
  member: string;
}

export function instanceOfA(object: any): object is Avocado {
  return object.discriminator === "I-AM-A";
}
