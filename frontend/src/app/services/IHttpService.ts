import {Observable} from 'rxjs/Observable';
import {RequestOptionsArgs} from '@angular/http';
export interface IHttpSerivce {

    getHttpService(url: string, options: RequestOptionsArgs): Observable<any>;
    postHttpService(url: string, body: any, options: RequestOptionsArgs): Observable<any>;
    putHttpService(url: string, body: any, options: RequestOptionsArgs): Observable<any>;
    deleteHttpService(url: string, options: RequestOptionsArgs): Observable<any>;
}