import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IHttpSerivce} from './IHttpService';

@Injectable()
export class HttpServices implements IHttpSerivce {
  constructor(private _http:Http) {
  }

  url:string ="http://localhost:8080/test/";
  getHttpService(url:string, options:RequestOptionsArgs):Observable<any> {
    return this._http.get(url, options)
      .map((res:Response) => {

        return res.json()['data'];
      })


  }


  postHttpService(url:string, body:any, options:RequestOptionsArgs):Observable<any> {
    return this._http.post(url, body, options)
      .map((res:Response) => {
        return res.json()['data'];
      })

  }

  putHttpService(url:string, body:any, options:RequestOptionsArgs):Observable<any> {
    return this._http.put(url, body, options)
      .map((res:Response) => {
        return res.json()['data'];
      })

  }


  deleteHttpService(url:string, options:RequestOptionsArgs):Observable<any> {
    return this._http.delete(url, options)
      .map((res:Response) => {
        return res.json()['data'];
      })

  }

  private handleError(res:Response) {
    console.log(res.json());
  }
}
