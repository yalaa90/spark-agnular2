/**
 * Created by yahia on 2/8/2017.
 */
import {ErrorHandler, Component, Inject, forwardRef} from '@angular/core';
import {Router} from '@angular/router';
import {ExceptionService} from "./exceptionService";


@Component({
  selector: 'exception',
  templateUrl: './globalExceptionHandler.html'
})
export class ExceptionComponent {
  errorName;
  errorType;
  whatToDo;

  constructor(private  es:ExceptionService) {
    this.errorName = es.errorName;
    this.errorType = es.errorType;
    this.whatToDo = es.whatToDo;
  }
}

export interface LoggingErrorHandlerOptions {
  rethrowError:boolean;
  unwrapError:boolean;
}

export var LOGGING_ERROR_HANDLER_OPTIONS:LoggingErrorHandlerOptions = {
  rethrowError: false,
  unwrapError: false
};


export class GlobalExceptionHandler implements ErrorHandler {
  errorName;
  errorType;
  whatToDo;

  constructor(@Inject(LOGGING_ERROR_HANDLER_OPTIONS) options:LoggingErrorHandlerOptions,private es:ExceptionService) {

  }


  handleError(error:any) {
    console.log(error);

    //this.router.navigate([ExceptionComponent]);
  }
}
