/**
 * Created by yahia on 2/19/2017.
 */
import {Injectable} from '@angular/core';
import {HttpServices} from "../../../services/HttpServices";
@Injectable()
export class RTPCService {

  constructor(private http:HttpServices){

  }


  getrtpc(){
    let url=this.http.url+"report/runwaytypepercountry";
    return this.http.getHttpService(url,null);
  }

}
