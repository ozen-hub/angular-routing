import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  selectedName:string = '';

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.selectedName = this.activeRoute.snapshot.paramMap.get('name')!;
  }

}
