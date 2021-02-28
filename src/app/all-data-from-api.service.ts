import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class AllDataFromApiService {

baseUrl="https://jsonplaceholder.typicode.com/"
  constructor(
    public http:HttpClient
  ) { }

allUsers(){
  return this.http.get<any>(`${this.baseUrl}users`).pipe(map(res=>{
    return res
  }))
}


}