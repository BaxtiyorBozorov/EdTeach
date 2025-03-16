export const HttpErrorCodes = {
    Success: 200,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    TooMany: 429,
    ServerError: 500,
    InternalServerError: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504
}

export const CommonErrorCodes = {
    NotPermission: 30000,
    Unauthorized: 30001,
    IncorrectOtp: 30002,
    TooManyAttempts: 30003,
    ExpiredOtp: 30004,
    IncorrectPassword: 30005,
    Unknown: 10000,
    NotFound: 10001,
    AlreadyExist: 10002,
    Validation: 10003,
    DbValidation: 10004,
    Success: 10005,
    AllreadyExist: 10006,
    TooManyAttemps: 10007,
}
