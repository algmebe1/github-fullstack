import { Component, OnInit, Input } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-repoitem',
  templateUrl: './repoitem.component.html',
  styleUrls: ['./repoitem.component.css']
})
export class RepoitemComponent implements OnInit {

  

  @Input() name!:string | undefined;
  @Input() updated_at!:string | undefined;
  @Input() language!:string | undefined;
  @Input() description!:string | undefined;
  @Input() open_issues!:number | undefined;
  @Input() stargazers_count!:number | undefined;


  checked:boolean=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  dateFormatter(date:string){
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(date));
  }

  getLanguageColor(language:string){
    let GitHubColors = require('github-colors');
    return GitHubColors.get(language) ? GitHubColors.get(language).color : "#ffffff";
  }

  toggle(){
    this.checked=!this.checked;
  }

}
