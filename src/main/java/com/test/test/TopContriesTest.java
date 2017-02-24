package com.test.test;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.test.dao.core.ReportDAO;

import junit.framework.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:/config/root-context.xml", "classpath:/config/servlet-context.xml"})
public class TopContriesTest {

	@Autowired private ReportDAO dao;
	 
	@Test
	public void test(){
		 List a=dao.getTop10Counties(false); 
		 Assert.assertEquals(true, a.size()>0);
	}
}
