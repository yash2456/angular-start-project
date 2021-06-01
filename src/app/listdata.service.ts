import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListdataService {
 url="   http://localhost:3000/list"
  constructor(private http:HttpClient) {} 
  getlist(){
    return this.http.get(this.url)
  }
  sava(value){
    console.log(value)
    return this.http.post(this.url,value)
  }
  deletlist(id){
    return this.http.delete(`${this.url}/${id}`)
  }
}
