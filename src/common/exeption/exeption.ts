import { CommonErrorCodes , HttpErrorCodes } from "./error.codes";

export class CommonException {
    code: number;
    message: string;
    data: any;
    statusCode: number;
    time: Date;

    constructor(code: number, message: string, data: any, statusCode: number, time: Date = new Date()) {
        this.code = code
        this.message = message
        this.data = data
        this.statusCode = statusCode
        this.time = time
    }

    static Success(data: any) {
        return new CommonException(CommonErrorCodes.Success,'Success',data,HttpErrorCodes.Success)
    }

    static Unauthorized(data = {}) {
        return new CommonException(CommonErrorCodes.Unauthorized,'Unauthorized',data,HttpErrorCodes.Unauthorized)
    }

    static Unknown(data = {}) {
        return new CommonException(CommonErrorCodes.Unknown,'UnknownError',data,HttpErrorCodes.ServerError)
    }

    static NotFound(data = {}) {            
        return new CommonException(CommonErrorCodes.NotFound,'NotFound',data,HttpErrorCodes.NotFound)
    }

    static BadRequest(data = {}) {
        return new CommonException(CommonErrorCodes.Unknown,'UnknownError',data,HttpErrorCodes.ServerError)
    }

    static AllreadyExist(data: any) {
        return new CommonException(CommonErrorCodes.AllreadyExist,'AllreadyExist',data,HttpErrorCodes.ServerError)
    }

    static Validation(data: any) {
        return new CommonException(CommonErrorCodes.Validation,'Validation error',data,HttpErrorCodes.BadRequest)
    }

    static DbValidation(data: any) {
        return new CommonException(CommonErrorCodes.DbValidation,'Db Validation error',data,HttpErrorCodes.ServerError)
    }

    static NotEnoughPermission(data = {}) {
        return new CommonException(CommonErrorCodes.NotPermission,'NotEnoughPermission',data,HttpErrorCodes.Forbidden)
    }
    static IncorrentOtp(data: any) {
        return new CommonException(CommonErrorCodes.IncorrectOtp,'IncorrectOtp',data,HttpErrorCodes.Forbidden)
    }
    static TooManyAttemps(data: any) {
        return new CommonException(CommonErrorCodes.TooManyAttemps,'TooManyAttemps',data,HttpErrorCodes.TooMany)
    }
    static ExpiredOtp(data: any) {
        return new CommonException(CommonErrorCodes.ExpiredOtp,'ExpiredOtp',data,HttpErrorCodes.Forbidden)
    }
    static IncorrectPassword(data: any) {
        return new CommonException(CommonErrorCodes.IncorrectPassword,'IncorrectPassword',data,HttpErrorCodes.Forbidden)
    }
}