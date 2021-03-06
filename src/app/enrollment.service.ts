import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import{catchError} from 'rxjs/operators';
import{throwError} from 'rxjs';

import { from } from 'rxjs';

/*creating express server 1) --npm init --yes 2) npm install --save express body-parser cors 3)node server*/
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(user:User){//receives a observable from server
return this._http.post<any>(this._url,user)
.pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse)
  {
return throwError (error);
  }
}
