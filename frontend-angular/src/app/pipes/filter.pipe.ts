import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(repoList: any, searchText: any): any {
    if (searchText) {
       return repoList.filter((element:any) => element.name.includes(searchText));
     } else {
       return repoList;
     }
    }

}
