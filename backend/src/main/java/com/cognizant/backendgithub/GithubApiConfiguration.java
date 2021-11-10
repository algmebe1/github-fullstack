package com.cognizant.backendgithub;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import feign.Feign;
import feign.gson.GsonDecoder;
import feign.gson.GsonEncoder;

@Configuration
public class GithubApiConfiguration {

	@Bean
	public GitHubApi setGitHubApi() {
		Gson gson = new GsonBuilder().setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES).create();
		GitHubApi githubApi = Feign.builder()
				.decoder(new GsonDecoder())
				.encoder(new GsonEncoder(gson))
				.target(GitHubApi.class, "https://api.github.com");
		
		return githubApi;
	}
}
