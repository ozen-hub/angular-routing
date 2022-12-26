import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(
      params=>{
        let orderData=JSON.parse(params['order']);
        console.log(orderData)
      }
    )
  }

}
