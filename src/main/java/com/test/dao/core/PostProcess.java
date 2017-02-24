package com.test.dao.core;

import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SaveMode;
import org.springframework.stereotype.Repository;

@Repository
public class PostProcess extends BaseDAO {

	PostProcess() {
		Dataset<Row> country = getFile("countries.csv");
		country = country.withColumnRenamed("name", "country_name").withColumnRenamed("id", "country_id")
				.withColumnRenamed("continent", "country_continent")
				.withColumnRenamed("wikipedia_link", "country_wikipedia_link")
				.withColumnRenamed("keywords", "country_keywords");
		Dataset<Row> airports = getFile("airports.csv");

		Dataset<Row> runways = getFile("runways.csv");
		runways = runways.withColumnRenamed("id", "runways.id");
		Dataset<Row> result = airports.join(country, country.col("code").equalTo(airports.col("iso_country")), "right")
				.join(runways, runways.col("airport_ref").equalTo(airports.col("id")), "left");

		result.write().mode(SaveMode.Overwrite).option("header", true).csv("result");
	}
}
