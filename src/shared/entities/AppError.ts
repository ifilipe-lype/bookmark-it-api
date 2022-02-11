export class AppError extends Error {
  constructor(readonly message: string, readonly statusCode: number = 400) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}
