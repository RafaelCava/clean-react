export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  serverError = 500,
  badRequest = 400,
  notFound = 404,
}

export interface HttpResponse<R = any> {
  statusCode: HttpStatusCode
  body?: R
}
