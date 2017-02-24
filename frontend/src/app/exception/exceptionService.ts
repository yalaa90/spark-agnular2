/**
 * Created by yahia on 2/8/2017.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/Router';
import {Http} from '@angular/http'
import {ExceptionComponent} from "./globalExceptionHandler";
@Injectable()
export class ExceptionService {
  _errorName;
  _errorType;
  _whatToDo;

  constructor(){

  }

  navToErrorPage(){
    //this.router.navigate([ExceptionComponent]);
  }
  get errorName() {
    return this._errorName
  }

  set errorName(value) {
    this._errorName = value;
  }


  get errorType() {
    return this._errorType
  }

  set errorType(value) {
    this._errorType = value;
  }


  get whatToDo() {
    return this._whatToDo
  }

  set whatToDo(value) {
    this._whatToDo = value;
  }
}
