package com.test.dao.core;

import java.util.List;

import org.apache.spark.api.java.function.MapFunction;
import org.apache.spark.sql.Dataset;
import org.apache.spark.sql.Encoders;
import org.apache.spark.sql.Row;
import org.springframework.stereotype.Repository;

import com.test.entities.core.AirportEntity;
import com.test.entities.core.CountryEntity;
import com.test.entities.core.RunwayEntity;

@Repository
public class ReportDAO extends BaseDAO {

	// Dataset<Row> df = getFile("result");

	private MapFunction<Row, CountryEntity> mf = (i) -> {
		CountryEntity country = new CountryEntity();
		
		country.setId(String.valueOf(i.get(2)));
		country.setCode(i.getString(0));
		country.setName(String.valueOf(i.getString(4)));
		country.setWikipedia_link(String.valueOf(i.getString(6)));
		return country;
	};

	public List<CountryEntity> getTop10Counties(boolean isDec) {
		Dataset<CountryEntity> countires = getFile("countries.csv").as(Encoders.bean(CountryEntity.class));

		Dataset<AirportEntity> airports = getFile("airports.csv").as(Encoders.bean(AirportEntity.class));
		Dataset<Row> result = airports
				.join(countires, countires.col("code").equalTo(airports.col("iso_country")), "left")
				.groupBy(airports.col("iso_country")).count();

		if (isDec)
			return result.join(countires, countires.col("code").equalTo(airports.col("iso_country")))
					.orderBy(result.col("count").desc()).map(mf, Encoders.bean(CountryEntity.class)).limit(10)
					.collectAsList();

		else
			return result.join(countires, countires.col("code").equalTo(airports.col("iso_country")))
					.orderBy(result.col("count")).map(mf, Encoders.bean(CountryEntity.class)).limit(10).collectAsList();
		// .map((Dataset<Row,CountryEntity> d) -> d ,
		// Encoders.bean(CountryEntity.class));

	}

	public List<RunwayEntity> getRunwayTypePerCountry() {

		Dataset<AirportEntity> airports = getFile("airports.csv").as(Encoders.bean(AirportEntity.class));

		Dataset<RunwayEntity> runway = getFile("runways.csv").as(Encoders.bean(RunwayEntity.class));

		return runway.join(airports, runway.col("airport_ref").equalTo(airports.col("id")), "inner")
				.groupBy(runway.col("surface"), airports.col("iso_country")).count().map((i) -> {
					RunwayEntity entity = new RunwayEntity();

					entity.setSurface(String.valueOf(i.get(0)));
					entity.setAirport_ident(String.valueOf(i.get(1)));
					entity.setId(String.valueOf(i.get(2)));
					return entity;
				}, Encoders.bean(RunwayEntity.class)).collectAsList();

	}

	public List<RunwayEntity> getTop10RunwayPerIdentifications() {
		Dataset<RunwayEntity> runway = getFile("runways.csv").as(Encoders.bean(RunwayEntity.class));
		Dataset<Row> result = runway.groupBy(runway.col("airport_ident")).count();

		return result.orderBy(result.col("count").desc()).limit(10).map((i) -> {
			RunwayEntity entity = new RunwayEntity();
			entity.setAirport_ident(String.valueOf(i.get(0)));
			entity.setAirport_ref(String.valueOf(i.get(1)));
			return entity;
		}, Encoders.bean(RunwayEntity.class)).collectAsList();
	}

}
