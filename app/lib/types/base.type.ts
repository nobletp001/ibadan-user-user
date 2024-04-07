export type BaseType<T> = {
  status: boolean;
  message: string;
  data?: T;
};
