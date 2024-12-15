import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.css']
})
export class DetaileComponent implements OnInit {

  empObj:any=<Employee>{};

  constructor(private route:ActivatedRoute,
    private service:HttpService ){

  }
  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"))
      this.getDataFromBackend(param.get("id"));
    })

  }

  getDataFromBackend(id:any){
      this.service.getEmpById(id)
      .subscribe((responce)=>{
        // console.log(responce)
        this.empObj=responce;
        
      })
  }

}
