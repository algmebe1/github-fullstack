import { Injectable } from '@angular/core';
import { RepoItem } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RepolistService {
  repoList: RepoItem[] = [];

  constructor(private http: HttpClient) {}

  loadRepoList(pat: string): Observable<RepoItem[]> {
    return this.http.get<RepoItem[]>(`http://localhost:8080/repos/?pat=${pat}`);
  }

  createRepoItem(newRepo: RepoItem, pat: string): Observable<any> {
    return this.http.post<any>(
      `http://localhost:8080/create/repo/?pat=${pat}`,
      newRepo
    );
  }
}
