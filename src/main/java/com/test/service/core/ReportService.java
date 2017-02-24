package com.test.service.core;

import java.util.List;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.dao.core.ReportDAO;
import com.test.entities.core.CountryEntity;
import com.test.entities.core.RunwayEntity;

@Service
public class ReportService {

	@Autowired
	ReportDAO reportDAO;

	public List<CountryEntity> getTop10Counties(boolean isDec) {
		return reportDAO.getTop10Counties(isDec);
	}

	public List<RunwayEntity> getRunwayTypePerCountry() {
		return reportDAO.getRunwayTypePerCountry();
	}

	public List<RunwayEntity> getTop10RunwayPerIdentifications() {
		return reportDAO.getTop10RunwayPerIdentifications();
	}
}
