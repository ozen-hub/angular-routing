import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemData: string = '';

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    //this.selectedName = this.activeRoute.snapshot.paramMap.get('name')!;
    this.activeRoute.paramMap.subscribe(response=>{
      // window.scrollTo(0,0)
      this.itemData = response.get('data')!;
    })
  }

}
