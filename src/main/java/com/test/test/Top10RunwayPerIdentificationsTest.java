package com.test.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.test.dao.core.ReportDAO;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/config/root-context.xml", "classpath:/config/servlet-context.xml"})
public class Top10RunwayPerIdentificationsTest {

	@Autowired private ReportDAO dao;
 
	@Test
	public void test(){
		System.out.println(dao.getTop10RunwayPerIdentifications().size());
	}
}
