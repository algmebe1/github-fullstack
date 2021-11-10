package com.cognizant.backendgithub.model;

public class Repo {
	String name;
	String updated_at;
	String language;
	String description;
	String homepage;
	int open_issues;
	int stargazers_count;
	boolean has_issues;
	boolean has_projects;
	boolean has_wiki;
	boolean Private;
	
	public String getHomepage() {
		return homepage;
	}
	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}
	public boolean isHas_issues() {
		return has_issues;
	}
	public void setHas_issues(boolean has_issues) {
		this.has_issues = has_issues;
	}
	public boolean isHas_projects() {
		return has_projects;
	}
	public void setHas_projects(boolean has_projects) {
		this.has_projects = has_projects;
	}
	public boolean isHas_wiki() {
		return has_wiki;
	}
	public void setHas_wiki(boolean has_wiki) {
		this.has_wiki = has_wiki;
	}
	public boolean isPrivate() {
		return Private;
	}
	public void setPrivate(boolean private1) {
		Private = private1;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUpdated_at() {
		return updated_at;
	}
	public void setUpdated_at(String updated_at) {
		this.updated_at = updated_at;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getOpen_issues() {
		return open_issues;
	}
	public void setOpen_issues(int open_issues) {
		this.open_issues = open_issues;
	}
	public int getStargazers_count() {
		return stargazers_count;
	}
	public void setStargazers_count(int stargazers_count) {
		this.stargazers_count = stargazers_count;
	}
	@Override
	public String toString() {
		return "Repo [name=" + name + ", description=" + description + ", homepage=" + homepage + ", has_issues="
				+ has_issues + ", has_projects=" + has_projects + ", has_wiki=" + has_wiki + ", Private=" + Private
				+ "]";
	}
	
	
}
