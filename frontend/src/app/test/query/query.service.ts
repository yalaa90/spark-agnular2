/**
 * Created by yahia on 2/19/2017.
 */
import {Injectable} from '@angular/core';
import {HttpServices} from "../../services/HttpServices";
@Injectable()
export class QueryService {

  constructor(private http:HttpServices){

  }

  getCountries(){
    let url=this.http.url+'query/countries'
    return this.http.getHttpService(url,null);
  }
  getData(item,limit,top){
    let url=this.http.url+'query'
    return this.http.getHttpService(url+"?code="+item.code+"&name="+item.name+"&limit="+limit+"&top="+top,null);
  }

}
