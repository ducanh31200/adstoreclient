export interface IReqSignIn {
  email_or_phone: string;
  password: string;
}
export interface IReqEmailOtp {
  email_or_phone: string;
  password: Number;
}

export interface IReqSignUp {
  email_or_phone: string;
  password: string;
  code: string;
}
export interface IReqGetOTP {
  email_or_phone: string;
}
