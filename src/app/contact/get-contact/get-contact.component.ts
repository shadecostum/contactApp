import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent {
contactData:any
constructor(private contactService:ContactService ){

contactService.getContact().subscribe(data=>
  {
    console.log(data);
    
    this.contactData=data;
  })
}

}
