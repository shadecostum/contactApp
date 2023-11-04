import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

addUserForm= new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  isAdmin: new FormControl('')
})


constructor(private userService:UserService,private routerNavigate:Router){}

  submitData(data:any)
  {
    console.log(data);
    
    //initialixze post method
    this.userService.addUser(data).subscribe({
      next:(data)=>
       {
        alert("succes with client side");
        this.routerNavigate.navigateByUrl("/getUser")
      },
      error:(errorResponce:HttpErrorResponse)=>
      {
        console.log(errorResponce);
        
      }
    })
  }
}
