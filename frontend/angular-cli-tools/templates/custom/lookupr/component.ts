import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormScreenReactive} from "../../screens/FormScreen.Reactive.component";
import {$PascalCaseName$Service} from './$name$.service';
 
 
@Component({
    selector: '$name$',
    templateUrl: '$name$.component.html'
   
})
export class $PascalCaseName$Component extends FormScreenReactive{

    constructor(private _$name$Service:$PascalCaseName$Service, private fb:FormBuilder) {
	
		super(_$name$Service);
		this.formR = fb.group({
      code:[''],
      name:[''] 
     
    })
		this.columns = [
            { field: 'code', header: 'code', filter: true },
            { field: 'name', header: 'name' }
			]
			this.dataSource = []
			this.url="http://localhost:8080/HRMAPI/$name$"
    }

    
}
