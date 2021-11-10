import { Component, OnInit } from '@angular/core';
import { RepolistService } from '../../services/repolist.service';
import { RepoItem } from '../../models';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css'],
})
export class CreateRepoComponent implements OnInit {
  repoItem = new RepoItem();
  title: string = "New Repository";
  icon: string = "../../../assets/images/HeaderIcons/close_white.svg";
  
  SUCCESS_REQUEST = 'Repository created successfully';
  ERROR_REQUEST = 'Request failed';
  ERROR_SERVER = 'Server error';
  ERROR_UNKNOWN = 'Unknown error';
  
  createRepoForm = this.fb.group({
    name: [''],
    description: [''],
    homepage: [''],
    has_issues: [false],
    has_projects: [false],
    has_wiki: [false],
    private: [false],
  });

  feedback: string = '';

  constructor(
    private repoListService: RepolistService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  createRepo() {
    this.repoItem = this.createRepoForm.value;
    this.repoListService
      .createRepoItem(this.repoItem, localStorage.getItem('pat')!)
      .subscribe((repo) => {
        if (repo >= 200 && repo < 300) {
          this.feedback = this.SUCCESS_REQUEST;
        } else if (repo >= 400 && repo < 500) {
          this.feedback = this.ERROR_REQUEST;
        } else if (repo >= 500 && repo < 600) {
          this.feedback = this.ERROR_SERVER;
        } else {
          this.feedback = this.ERROR_UNKNOWN;
        }
      });

    this.createRepoForm.reset();
  }

  resetFeedback() {
    this.feedback = '';
  }
}
