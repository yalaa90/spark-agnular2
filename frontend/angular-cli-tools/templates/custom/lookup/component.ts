import { Component } from '@angular/core';
import {$PascalCaseName$Service} from './$name$.service';
import {FormScreen} from '../../screens/FormScreen.component';
 
@Component({
    selector: '$name$',
    templateUrl: '$name$.component.html'
   
})
export class $PascalCaseName$Component extends FormScreen{

    constructor(private _$name$Service:$PascalCaseName$Service) {
	
		super(_$name$Service);
		this.columns = [
            { field: 'code', header: 'code', filter: true },
            { field: 'name', header: 'name' }
			]
			this.dataSource = []
			this.url="http://localhost:8080/HRMAPI/"
    }

    
}
