package com.test.controllers.core;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.entities.core.CountryEntity;
import com.test.entities.core.RunwayEntity;
import com.test.service.core.ReportService;

@RestController
@RequestMapping("report")
public class ReportController {

	private @Autowired ReportService service;

	@RequestMapping(value = "topcountry", method = RequestMethod.GET)
	public SuccessResponse<List<CountryEntity>> getTop10Counties(@RequestParam("isDec") boolean isDec) {

		return new SuccessResponse(service.getTop10Counties(isDec));
	}

	@RequestMapping(value = "runwaytypepercountry", method = RequestMethod.GET)
	public SuccessResponse<List<RunwayEntity>> getRunwayTypePerCountry() {

		return new SuccessResponse(service.getRunwayTypePerCountry());
	}

	@RequestMapping(value = "toprunway", method = RequestMethod.GET)
	public SuccessResponse<List<RunwayEntity>> getTop10RunwayPerIdentifications() {

		return new SuccessResponse(service.getTop10RunwayPerIdentifications());
	}
}
