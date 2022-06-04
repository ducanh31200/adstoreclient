interface ResponseInstant {
  message: string;
  status: number;
  headers?: any;
}

export interface ReturnReponse<T> extends ResponseInstant {
  data: T;
}

export interface ReturnListReponse<T> extends ResponseInstant {
  data: Array<T>;
}
