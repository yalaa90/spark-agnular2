package com.test.dao.core;

import java.util.List;
import java.util.function.Function;

import org.apache.spark.api.java.function.MapFunction;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Encoders;
import org.apache.spark.sql.Row;
import org.apache.spark.sql.functions;
import org.springframework.stereotype.Repository;

import com.test.entities.core.CountryEntity;
import com.test.entities.core.DTOEntity;
import com.test.entities.core.RunwayEntity;

@Repository
public class QueryDAO extends BaseDAO {

	private MapFunction<Row,DTOEntity> fun=((i)->{
		 
			DTOEntity entity = new DTOEntity();

			
			entity.setIdent(String.valueOf(i.getString(1)));
			entity.setType(String.valueOf(i.getString(2)));
			entity.setAirportName(String.valueOf(i.getString(3)));
			entity.setCode(String.valueOf(i.get(19)));
			entity.setCountryName(String.valueOf(i.getString(20)));
			
			entity.setSurface(String.valueOf(i.getString(29)));
			return entity;
	});
	public List<DTOEntity> getResultByCode(String code, int top, int limit) {
		Dataset<Row> df = getFile("result");
		df = df.where(df.col("code").like("%" + code + "%")).orderBy(df.col("code"));
		Dataset<Row> df1 = df.limit(limit);
		Dataset<Row> df2 = df.except(df1).limit(top - limit);
		return df2.map(fun,Encoders.bean(DTOEntity.class)).collectAsList();
	}

	public List<DTOEntity> getResultByName(String name, int top, int limit) {
		Dataset<Row> df = getFile("result");
		df = df.where(df.col("country_name").like("%" + name + "%")).orderBy(df.col("country_name"));
		Dataset<Row> df1 = df.limit(limit);
		Dataset<Row> df2 = df.except(df1).limit(top - limit);
		return df2.map(fun,Encoders.bean(DTOEntity.class)).collectAsList();
	}

	/*
	 * public Dataset<Row> getResult(String name, String code, int top, int
	 * limit) { Dataset<Row> df = getFile("result"); df =
	 * df.where(df.col("country_name").like("%" + name + "%")
	 * .and(df.col("code").like("%" + code + "%")))
	 * .orderBy(df.col("country_name"));
	 * 
	 * Dataset<Row> df1 = df.limit(limit); Dataset<Row> df2 =
	 * df.except(df1).limit(top - limit); return df2; }
	 */
	public List<DTOEntity> getResult(String name, String code, int top, int limit) {

		if (!code.isEmpty())
			return getResultByCode(code, top, limit);

		if (!name.isEmpty())
			return getResultByName(name, top, limit);
		return null;
	}

	public List<CountryEntity> getCounties() {
		return getFile("countries.csv").map(i -> {

			CountryEntity country = new CountryEntity();

			country.setId(String.valueOf(i.get(0)));
			country.setCode(String.valueOf(i.getString(1)));
			country.setName(String.valueOf(i.getString(2)));

			return country;

		}, Encoders.bean(CountryEntity.class)).collectAsList();
	}
}
