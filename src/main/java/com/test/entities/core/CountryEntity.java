package com.test.entities.core;

public class CountryEntity extends BaseEntity {

	private String code;
	private String name;
	private String continent;
	private String wikipedia_link;
	private String keywords;
	/*private String count;

	public String getCount() {
		return count;
	}

	public void setCount(String count) {
		this.count = count;
	}*/

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContinent() {
		return continent;
	}

	public void setContinent(String continent) {
		this.continent = continent;
	}

	public String getWikipedia_link() {
		return wikipedia_link;
	}

	public void setWikipedia_link(String wikipedia_link) {
		this.wikipedia_link = wikipedia_link;
	}

	public String getKeywords() {
		return keywords;
	}

	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}

}
