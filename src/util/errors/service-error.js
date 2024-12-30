const { StatusCodes } = require("http-status-codes");

class ServiceError extends Error {
  constructor(
    message = "Something went Wrong",
    explanation = "Service layer Error",
    statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    this.name = "Service Error";
    this.message = message;
    this.explanation = explanation;
    this.statusCodes = statusCodes;
  }
}

module.exports = ServiceError;
