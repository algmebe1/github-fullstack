import { Component, OnInit } from '@angular/core';
import { RepolistService } from 'src/app/services/repolist.service';
import { RepoItem } from 'src/app/models';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css'],
})
export class RepolistComponent implements OnInit {
  repoList: RepoItem[] = [];
  title: string = 'Repositories';

  waitForRepoList: boolean = true;

  filterText: string | undefined;

  constructor(private repoListService: RepolistService) {}

  ngOnInit(): void {
    this.getRepoList(localStorage.getItem('pat')!);
    setTimeout(() => (this.waitForRepoList = false), 1000);
  }

  getRepoList(pat: string): void {
    this.repoListService
      .loadRepoList(pat)
      .subscribe((list) => (this.repoList = list));
  }
}
