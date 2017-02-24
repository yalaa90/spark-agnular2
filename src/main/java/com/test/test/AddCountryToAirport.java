package com.test.test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.test.controllers.core.QueryController;

//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration(locations = { "classpath:/config/root-context.xml", "classpath:/config/servlet-context.xml"})
public class AddCountryToAirport {
	@Autowired QueryController controller;

	@Test
	public void test() {
		try{
		//controller.getData();
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
	}

}
