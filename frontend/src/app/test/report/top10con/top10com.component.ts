import {Component, AfterViewInit} from '@angular/core';
import {TopConService} from "./top10com.service";
@Component({
  selector: 'topcon',
  templateUrl: 'top10com.component.html',
  providers: [TopConService]
})
export class TopCountriesComponent {

  status = 'Top';
  gridDataSource = [];
  gridColumns =
    [{field: "id", header: 'ID'},
      {field: "code", header: 'Country Code'},
      {field: "name", header: 'Country name'},
      {field: "wikipedia_link", header: 'wikipedialink'}
    ];

  constructor(private tcs:TopConService) {

  }

  change(rd) {
    this.tcs.getCounties(rd.value == 'Top').subscribe(i=> {
      this.gridDataSource = i;
    })
  }

  ngAfterViewInit() {
    this.tcs.getCounties(this.status == 'Top').subscribe(i=> {
      this.gridDataSource = i;
    })
  }


}
