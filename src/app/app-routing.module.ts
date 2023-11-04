import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUserComponent } from './user/get-user/get-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { GetContactComponent } from './contact/get-contact/get-contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { AddDetailComponent } from './detail/add-detail/add-detail.component';
import { GetDetailComponent } from './detail/get-detail/get-detail.component';


const routes: Routes = [
  {
    path:"getUser",component:GetUserComponent
  },
  {
    path:"addUser",component:AddUserComponent
  },
  {
    path:"getContact",component:GetContactComponent
  },
  {
    path:"addContact",component:AddContactComponent
  },
  {
    path:"addDetail",component:AddDetailComponent
  },
  {
    path:"getDetail",component:GetDetailComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
