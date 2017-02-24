package com.test.dao.core;

import org.apache.spark.SparkConf;
import org.apache.spark.SparkContext;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.SparkSession;

public abstract class BaseDAO implements IDAO {
	public static SparkConf conf = new SparkConf().setAppName("test").setMaster("local")
			.set("spark.driver.allowMultipleContexts", "true");
	// create Spark Context
	public static SparkContext context = new SparkContext(conf);

	// create spark Session
	public static SparkSession sparkSession = new SparkSession(context);

	public static JavaSparkContext jsc = new JavaSparkContext(context);

	public Dataset<Row> getFile(String fileName) {

		Dataset<Row> df = sparkSession.read().format("com.databricks.spark.csv").option("header", true)
				.option("inferSchema", true).load(fileName);

		return df;

	}

	public boolean saveFile(Dataset<Row> df, String fileName) {
		df.write().option("header", true).csv(fileName + ".csv");
		return true;
	}

}
