/**
 * Created by yahia on 2/19/2017.
 */
import {Injectable} from '@angular/core';
import {HttpServices} from "../../../services/HttpServices";
@Injectable()
export class TopConService {

  constructor(private http:HttpServices){

  }

 getCounties(isDec){
   let url=this.http.url+"report/topcountry?isDec="+isDec;
   return this.http.getHttpService(url,null);
 }

}
