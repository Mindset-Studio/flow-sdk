

export class FlowError extends Error{
    constructor(message: string, title:string) {
        super(`${title}: \n ${message}`)
    }
}

export class FlowHTTPError extends Error {
    code:string
    constructor(message:string, code:string ){
        super(message)
        this.code = code
    }
    log():void{
        console.log(`⚠️ Error code: ${this.code} \n ${this.message}`)
    }
}