package com.hrms.controllers.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hrms.entities.*.$PascalCaseName$Entity;
import com.hrms.service.*.IBaseService;
import com.hrms.service.*.$PascalCaseName$Service;

@RestController
@RequestMapping("")
public class $PascalCaseName$Controller extends DefaultFormController<$PascalCaseName$Entity> {

	@Autowired $PascalCaseName$Service $name$Service;
 	
	@Override
	public IBaseService<$PascalCaseName$Entity, String> getEntityService() {
		
 		return $PascalCaseName$Service;
	}
	 
	
	

}
