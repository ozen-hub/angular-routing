import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app3';
  constructor(
    private router:Router
  ) {
  }

  navigateToLink(link: string) {
   /* this.router.navigate([link]).then(e=>{
      console.log(e)
    });*/
    this.router.navigateByUrl(link).then(e=>{
      console.log(e)
    });
  }

  navigateWithClick(link: string, data: string) {
    /* this.router.navigate([link,data]).then(e=>{
      console.log(e)
    });*/
    this.router.navigateByUrl(link+"/"+data).then(e=>{
      console.log(e)
    });
  }
}
