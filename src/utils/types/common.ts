export interface CustomJsonObject<T> {
  [key: string]: T;
}

export interface Table {
  header: {
    label: string;
    name: string;
    width?: number;
    status?: string
  }[];
  body: CustomJsonObject<any>[];
}
