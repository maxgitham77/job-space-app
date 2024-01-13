import { StatusCodes } from 'http-status-codes';

export interface IErrorResponse {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
  serializeErrors(): IError;
}

export interface  IError {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
}

export abstract class CustumError extends Error {
  abstract statusCode: number;
  abstract ststus: string;
  comingFrom: string;

  constructor(message: string, comingFrom: string) {
    super(message);
    this.comingFrom = comingFrom;
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.ststus,
      comingFrom: this.comingFrom,
    }
  }
}

export class BadRequestError extends CustumError {
  statusCode = StatusCodes.BAD_REQUEST;
  ststus: 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class NotFoundError extends CustumError {
  statusCode = StatusCodes.NOT_FOUND;
  ststus: 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class NotAuthorizedError extends CustumError {
  statusCode = StatusCodes.UNAUTHORIZED;
  ststus: 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class FileTooLargeError extends CustumError {
  statusCode = StatusCodes.REQUEST_TOO_LONG;
  ststus: 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class ServerError extends CustumError {
  statusCode = StatusCodes.SERVICE_UNAVAILABLE;
  ststus: 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}




