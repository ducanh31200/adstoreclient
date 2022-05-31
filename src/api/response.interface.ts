interface ResponseInstant {
  message: string;
  status: number;
}

export interface ReturnReponse<T> extends ResponseInstant {
  data: T;
}

export interface ReturnListReponse<T> extends ResponseInstant {
  data: Array<T>;
}
