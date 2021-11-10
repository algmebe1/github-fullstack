package com.cognizant.backendgithub.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.backendgithub.GitHubApi;
import com.cognizant.backendgithub.model.Repo;
import com.cognizant.backendgithub.model.User;

import feign.FeignException;

@RestController
public class Controller {

	// Github Api
	@Autowired
	GitHubApi githubApi;

	// Routes
	@CrossOrigin
	@GetMapping("/")
	public User getUser(@RequestParam String username, @RequestParam String pat) {
		try {
			User user = githubApi.getUser(pat);
			return user;
		} catch (FeignException exception) {
			return null;
		}
	}

	@CrossOrigin
	@GetMapping("/profile")
	public User getProfile(@RequestParam String pat) {
		User user = githubApi.getUser(pat);
		return user;
	}

	@CrossOrigin
	@GetMapping("/repos")
	public ArrayList<Repo> getRepoList(@RequestParam String pat) {
		ArrayList<Repo> repoList = githubApi.getRepoList(pat);
		return repoList;
	}

	@CrossOrigin
	@PostMapping("/create/repo")
	public int createRepo(@RequestBody Repo repo, String pat) {
		try {
			githubApi.createRepo(repo, pat);
		} catch (FeignException exception) {
			return exception.status();
		}
		return 1;
	}
}
