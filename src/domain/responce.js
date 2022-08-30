class Responce {
  constructor(statusCode, httpStatus, message, data) {
    this.timeStamp = new Data().toLocalString();
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.data = data;
  }
}

export default Responce;