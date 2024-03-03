export class FlowError extends Error {
  constructor (message: string, title: string) {
    super(`${title}: \n ${message}`)
  }
}

export class FlowHTTPError extends Error {
  code: string
  name: string = 'Flow HTTP Error'
  url: string
  constructor (message: string, code: string, url: string) {
    super(message)
    this.code = code
    this.url = url
  }

  log (): void {
    console.log(`⚠️\n${this.name}\nError code: ${this.code} \nMessage: ${this.message} \nURL: ${this.url} \n`)
  }
}
