package com.cognizant.backendgithub;

import java.util.ArrayList;

import com.cognizant.backendgithub.model.Repo;
import com.cognizant.backendgithub.model.User;

import feign.Headers;
import feign.Param;
import feign.RequestLine;

public interface GitHubApi {
	
	@RequestLine("GET /user")
	@Headers("Authorization: token {pat}")
	User getUser(@Param("pat") String pat);
	
	@RequestLine("GET /user/repos")
	@Headers("Authorization: token {pat}")
	ArrayList<Repo> getRepoList(@Param("pat") String pat);
	
	@RequestLine("POST /user/repos")
	@Headers("Authorization: token {pat}")
	int createRepo(Repo repo, @Param("pat") String pat);

}
