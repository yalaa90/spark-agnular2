/**
 * Created by yahia on 2/19/2017.
 */
import {Injectable} from '@angular/core';
import {HttpServices} from "../../../services/HttpServices";
@Injectable()
export class TopRunwayService {

  constructor(private http:HttpServices){

  }

 getRunWay(){
   let url=this.http.url+"report/toprunway";
   return this.http.getHttpService(url,null);
 }

}
