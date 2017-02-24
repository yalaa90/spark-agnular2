package com.test.service.core;

import java.util.List;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.dao.core.QueryDAO;
import com.test.entities.core.CountryEntity;
import com.test.entities.core.DTOEntity;

@Service
public class QueryService {

	@Autowired
	QueryDAO queryDAO;

	public List<DTOEntity> getResult(String name, String code, int top, int limit) {
		return queryDAO.getResult(name, code, top, limit);
	}
	
	public List<CountryEntity> getCounties() {
		return queryDAO.getCounties();
	}

}
