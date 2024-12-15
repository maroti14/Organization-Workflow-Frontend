export interface Employee{
  id:number,
  name:string,
  status:string,
  deparment:string,
  mobileno:string,
  emailid:string,
  createdBy:string,
  updateBy:string,
  salary:number,
  createdDate:Date
  updatedDate:Date
  country:{
    cid:number,
    cname:string
  }
}