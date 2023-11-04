import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailService } from 'src/app/Services/detail.service';

@Component({
  selector: 'app-get-detail',
  templateUrl: './get-detail.component.html',
  styleUrls: ['./get-detail.component.css']
})
export class GetDetailComponent {
  detailData:any

  constructor(private detailservice:DetailService){

    detailservice.getDetail().subscribe(data=>
      {
        console.log(data);
        
        this.detailData=data
      })
      
    
  }



}
