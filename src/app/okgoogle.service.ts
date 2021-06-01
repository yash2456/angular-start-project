import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// export class data{
//   constructor(
//    public id:number,
//    public title:string,
//    public userId:number
//   ){
   
//  }
// }

@Injectable({
  providedIn: 'root'
})
export class OkgoogleService {

  // constructor(private http:HttpClient) { }
 
  // getdata()                                           //api call thayi
  // {
  //   let url="http://jsonplaceholder.typicode.com/todos";
  //   return this.http.get<any>(url);
  // }
  url=" http://localhost:3000/posts"
   constructor(private http:HttpClient){}
  getlist(){
     return this.http.get(this.url) 
    
  }
  sava(result)
  {
    console.log(result)
    
     return this.http.post(this.url,result)
  }
  deleteok(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getcurrentok(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateok(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  file(file)
  {
    // console.log(file)
    return this.http.post(`${this.url}`,file)

  }

  
}
