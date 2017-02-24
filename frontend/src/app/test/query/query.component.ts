import {Component, AfterViewInit} from '@angular/core';
import {QueryService} from "./query.service";
@Component({
  selector: 'query',
  templateUrl: 'query.component.html',
  providers: [QueryService]
})
export class QueryComponent {

  dataSourceCode = [{label: 'select code', value: null}];
  dataSourceName = [{label: 'select name', value: null}];
  name;
  code;
  totalR = 10;
  first = 0;
  gridDataSource = [];
  gridColumns =
    [{field: "airportName", header: 'Airport Name'},
      {field: "code", header: 'Country Code'},
      {field: "countryName", header: 'Country name'},
      {field: "ident", header: 'Airport ident'},
      {field: "type", header: 'Airport type'},
      {field: "surface", header: 'Runway surface'}
    ];

  constructor(private qs:QueryService) {

  }

  ngAfterViewInit() {
    this.qs.getCountries().subscribe(i=> {
      i.forEach(item=> {
        this.dataSourceCode.push({label: item.code, value: {id: item.id, code: item.code, name: item.name}});
        this.dataSourceName.push({label: item.name, value: {id: item.id, code: item.code, name: item.name}});
      })

    })
  }

  loadCarsLazy(event) {
    if (event.first != 0) {
      
      this.search(event.rows, event.first + 10)
    }
  }

  search(limit, top) {
    if (this.code) {
      this.qs.getData(this.code, limit, top).subscribe(i=> {
        if (i.length == 10) {
          this.totalR += 10;

        }
        else {
          this.totalR = 0
        }
        this.gridDataSource = i;
      })
    }

    if (this.name) {
      this.qs.getData(this.name, limit, top).subscribe(i=> {
        this.gridDataSource = i;
      })
    }
  }

  changeName() {
    this.name = '';
  }

  changeCode() {
    this.code = '';
  }
}
