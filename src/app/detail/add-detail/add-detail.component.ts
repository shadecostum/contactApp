import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/Services/detail.service';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent {

  addDetailForm=new FormGroup({

    type:new FormControl(''),
    emailOrNumber:new FormControl(''),
    contactId:new FormControl('')
  })
  constructor(private detailService:DetailService,private router:Router){}


  submitData(data:any){
this.detailService.addDetail(data).subscribe({
  next:(data)=>
  {

    alert("sucess")
    this.router.navigateByUrl("/getDetail")
  },
  error:(er:HttpErrorResponse)=>
  {
    console.log(er);
    
  }
                                              })
  }
}
