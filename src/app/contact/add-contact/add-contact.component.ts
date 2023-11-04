import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  addContactForm=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userId: new FormControl('')
  })



constructor(private contactServic:ContactService,private router:Router)
{

}

  submitData(data:any)
  {
    this.contactServic.postContact(data).subscribe({
      next:(data)=>
      {
        console.log(data);
        alert("sucess")
        this.router.navigateByUrl("/getContact")
        
      },
      error:(er:HttpErrorResponse)=>
      {
        console.log(er);
        
      }
    })
  }
}
