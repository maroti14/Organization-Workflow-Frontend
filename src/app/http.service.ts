import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080/empApi/'
  baseUrl1:string='http://localhost:8080/api/'

  constructor(private http:HttpClient) {

  }

  getAllEMp(){
    return (this.http.get(`${this.baseUrl}getallEmp`));
  }

  getEmpById(id:any){
    return (this.http.get(`${this.baseUrl}getper/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl1}getall`));
  }

  postEmpData(obj:any){
    return (this.http.post(`${this.baseUrl}addrecordEmp`,obj,{
      responseType:'text'
    }));
  }

  updateEmpData(obj:any){
    return (this.http.put(`${this.baseUrl}updateemployee/${obj.id}`,
      obj,{
      responseType:'text'
    }));
  }

  deleteData(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{
      responseType:'text'
    }))
  }

}
