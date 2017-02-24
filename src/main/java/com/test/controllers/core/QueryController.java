package com.test.controllers.core;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.test.entities.core.CountryEntity;
import com.test.entities.core.DTOEntity;
import com.test.service.core.QueryService;

@RestController
@RequestMapping("query")
public class QueryController {

	private @Autowired QueryService service;

	@RequestMapping(method = RequestMethod.GET)
	public SuccessResponse<List<DTOEntity>> getData(@RequestParam("code") String code, @RequestParam("name") String name,
			@RequestParam("top") int top, @RequestParam("limit") int limit) {

		return new SuccessResponse(service.getResult(name, code, top, limit));
	}

	@RequestMapping(value = "countries", method = RequestMethod.GET)
	public SuccessResponse<List<CountryEntity>> getCountries() {

		return new SuccessResponse(service.getCounties());
	}

}
