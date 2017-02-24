import {Component} from "@angular/core";
import {TopRunwayService} from "./top10runway.service";
@Component({
  selector: 'toprunway',
  templateUrl: 'top10runway.component.html',
  providers: [TopRunwayService]
})
export class Top10RunwayComponent {

  gridDataSource = [];
  gridColumns =
    [
      {field: "airport_ident", header: 'Airport ident'},
      {field: "airport_ref", header: 'count'}
    ];

  constructor(private trs:TopRunwayService) {

  }



  ngAfterViewInit() {
    this.trs.getRunWay().subscribe(i=> {
      this.gridDataSource = i;
    })
  }


}
