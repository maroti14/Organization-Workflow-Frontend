import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  addData:any=<Employee>{};
  allCountry:any[]=[];
  isUpdated:boolean=false;

  constructor(private service:HttpService,
               private router:Router,
               private route:ActivatedRoute
              ){

  }
  ngOnInit(): void {
    this.getAllCounrtyFromBackend();
    this.getDataFromUrlEmp();
  }

  getDataFromUrlEmp(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"));
      this.isUpdated=true;
      this.getEmpByIdFromBackend(param.get("id"))
    })
  }

  getEmpByIdFromBackend(id:any){

    this.service.getEmpById(id)
    .subscribe((responce:any)=>{
      console.log(responce)
      this.addData=responce
    });

  }

  getAllCounrtyFromBackend(){
    this.service.getAllCountry()
    .subscribe((responce:any)=>{
      // console.log(responce)
      this.allCountry=responce
      
    });


  }

  onSubmit(){

    if(this.isUpdated){
      //update Record
      this.addData.updateBy="Maroti";
      this.addData.updatedDate=Date.now();
      this.service.updateEmpData(this.addData)
      .subscribe((response:any)=>{
          console.log(response)
          this.router.navigate(['']);
          
      })


    // }else{
    //   //Add Record 
    // this.addData.createdBy="Maroti";
    // this.addData.createdDate=Date.now();
    // this.addData.updateBy="Maroti";
    // this.addData.updatedDate=Date.now();

    //   console.log(this.addData)
    //   this.service.postEmpData(this.addData)
    //   .subscribe((response)=>{
    //     console.log(response)
    //     this.router.navigate(['']);
    //   })
    }

    this.addData.createdBy="Maroti";
    this.addData.createdDate=Date.now();
    this.addData.updateBy="Maroti";
    this.addData.updatedDate=Date.now();

      console.log(this.addData)
      this.service.postEmpData(this.addData)
      .subscribe((response)=>{
        console.log(response)
        this.router.navigate(['']);
      })
    

    
  }
  


}
