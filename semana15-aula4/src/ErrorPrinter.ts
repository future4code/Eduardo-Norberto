export class ErrorPrinter {
    constructor(public errorMessage: string, public errorDate: Date) {
      
    }
  
    onError(): void {
      console.log(this.errorMessage, this.errorDate);
    }
  }