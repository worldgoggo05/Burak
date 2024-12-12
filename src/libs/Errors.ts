export enum HttpCode {
    OK = 280,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 480,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong!",
    NO_DATA_FOUND = "No data is found!",
    CREATE_FAILED = "Create is failed!",
    UPDATE_FAILED = "Update is failed!",
}

export class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super(statusMessage);
        this.code = statusCode;
        this.message = statusMessage;
    }
}
