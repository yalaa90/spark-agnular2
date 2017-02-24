import {Component, AfterViewInit} from '@angular/core';
import {RTPCService} from "./rtpc.service";
@Component({
  selector: 'rtpc',
  templateUrl: 'rtpc.component.html',
  providers: [RTPCService]
})
export class RTPCComponent {


  gridDataSource = [];
  gridColumns =
    [
      {field: "airport_ident", header: 'Country Code'},
      {field: "surface", header: 'surface'},
      {field: "id", header: 'count'}
    ];

  constructor(private rtpcs:RTPCService) {

  }

  ngAfterViewInit() {
    this.rtpcs.getrtpc().subscribe(i=> {
      this.gridDataSource = i;
    })
  }


}
