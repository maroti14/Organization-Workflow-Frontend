import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empData:any[]=[];
  id!:any;
  isRadioClick:boolean=false;

  constructor(private service:HttpService,
             private router:Router
  ){

  }
  ngOnInit(): void {

    this.getDataFromBackend();
    
  }

  getDataFromBackend(){
    this.service.getAllEMp()
    .subscribe((responce:any)=>{
      // console.log(responce)
      this.empData=responce;
    })
  }

  onRadioClick(id:any){
    this.isRadioClick=true;
    this.id=id;
  }

  onUpdate(){
    if(this.isRadioClick){
      //update Employee
      this.router.navigate(['/updateEmp',this.id])
    }else{
      alert("Plese Select Employee to be Updated......")
    }
  }

  onDelete(){

    if(this.isRadioClick){
     //delete logic 
     this.service.deleteData(this.id)
     .subscribe((response)=>{
       console.log(response)
       this.getDataFromBackend();
     })
     
    }else{
      alert("Plese Select Employee to be Updated......")
    }

  }

}
