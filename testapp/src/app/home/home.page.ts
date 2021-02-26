import { Component } from '@angular/core';
 import {Router} from '@angular/router';
import {DataService} from './../services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private service:DataService) {}

 async submit(name){
    console.log(name);

    const data ={
      userName:name
    }
   await this.service.postUserData(data).subscribe(data =>{
      console.log(data);
      
    })
    await this.router.navigate(['/dashboard']);
    
  }

}
