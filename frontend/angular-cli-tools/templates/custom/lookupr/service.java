package com.hrms.service.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hrms.dao.core.IBaseDAO;
import com.hrms.dao.*.*;
import com.hrms.entities.*.*;


@Service
public class $PascalCaseName$Service extends BaseService<$PascalCaseName$Entity,String> {

	@Autowired $PascalCaseName$DAO $name$DAO;

	@Override
	public IBaseDAO<$PascalCaseName$Entity, String> getEntityDAO() {
		return $name$DAO;
	}
	
	 

}
