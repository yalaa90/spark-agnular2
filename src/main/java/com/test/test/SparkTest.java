package com.test.test;

import org.apache.spark.SparkConf;
import org.apache.spark.SparkContext;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;
import org.junit.Test;

public class SparkTest {
	SparkConf conf = new SparkConf().setAppName("test").setMaster("local");
	// create Spark Context
	SparkContext context = new SparkContext(conf);

	// create spark Session
	SparkSession sparkSession = new SparkSession(context);

	@Test
	public void test() {

		try {
			Dataset<Row> country = getFile("countries.csv");
			country = country.withColumnRenamed("name", "country_name").withColumnRenamed("id", "country_id")
					.withColumnRenamed("continent", "country_continent")
					.withColumnRenamed("wikipedia_link", "country_wikipedia_link")
					.withColumnRenamed("keywords", "country_keywords");
			Dataset<Row> airports = getFile("airports.csv");

			Dataset<Row> runways = getFile("runways.csv");
			runways = runways.withColumnRenamed("id", "runways.id");
			Dataset<Row> result = airports
					.join(country, country.col("code").equalTo(airports.col("iso_country")), "inner")
					.join(runways, runways.col("airport_ref").equalTo(airports.col("id")), "inner");

			result.write().option("header", true).csv("result");

		} catch (Exception e) {
			System.out.println(e);
		}

	}

	public Dataset<Row> getFile(String fileName) {

		Dataset<Row> df = sparkSession.read().format("com.databricks.spark.csv").option("header", true)
				.option("inferSchema", true).load(fileName);

		return df;

	}

}
