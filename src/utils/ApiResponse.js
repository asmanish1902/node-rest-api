class ApiResponse {

    constructor(status, statusCode, message, data = null) {
        this.success = status;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export default ApiResponse;